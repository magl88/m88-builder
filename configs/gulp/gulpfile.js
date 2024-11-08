import "dotenv/config";
import gulp from "gulp";
import { deleteAsync } from "del";

import * as paths from "./paths.js";
import * as tasks from "./tasks/index.js";

global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	gulp: gulp,
	paths: paths,
};

const delBuild = () => deleteAsync(paths.buildFolder, { force: true });

const assets = gulp.parallel(tasks.favicons, tasks.fonts, tasks.svg, tasks.images);
const start = gulp.parallel(assets, tasks[process.env.BUILD_TYPE], tasks.scss, tasks.js);

gulp.task("default", gulp.parallel(tasks.webServer, tasks.watch));

gulp.task("dev", gulp.series(delBuild, start, gulp.parallel(tasks.webServer, tasks.watch)));

gulp.task(
	"build",
	gulp.series(
		delBuild,
		tasks[process.env.BUILD_TYPE],
		gulp.parallel(
			assets,
			gulp.series(tasks.scss, tasks.minCss, tasks.setCssMinPath),
			gulp.series(tasks.js, tasks.minJS, tasks.setJSMinPath),
		),
	),
);

gulp.task(
	"zip",
	gulp.series(
		delBuild,
		tasks[process.env.BUILD_TYPE],
		gulp.parallel(
			assets,
			gulp.series(tasks.scss, tasks.minCss, tasks.setCssMinPath),
			gulp.series(tasks.js, tasks.minJS, tasks.setJSMinPath),
		),
		tasks.zip,
		delBuild,
	),
);

gulp.task("clear", delBuild);
gulp.task("ftp-update", gulp.series(tasks.ftpUpdate));
