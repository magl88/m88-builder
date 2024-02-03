import projectConst from "./package.json" assert { type: "json" };
import gulp from "gulp";
import { deleteAsync } from "del";

import * as config from "./gulp/config/index.js";
import * as tasks from "./gulp/tasks/index.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  gulp: gulp,
  path: config.path,
};

const delBuild = () => deleteAsync(config.path.buildFolder, { force: true });

const assets = gulp.parallel(tasks.favicons, tasks.fonts, tasks.svg, tasks.images);
const start = gulp.parallel(assets, tasks[projectConst.buildType], tasks.scss, tasks.js);

gulp.task("default", gulp.parallel(tasks.webServer, tasks.watch));

gulp.task("dev", gulp.series(delBuild, start, gulp.parallel(tasks.webServer, tasks.watch)));

gulp.task(
  "build",
  gulp.series(
    delBuild,
    tasks[projectConst.buildType],
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
    tasks[projectConst.buildType],
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
