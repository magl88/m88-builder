import "dotenv/config";
import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";

const camelize = (str) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, "");
};

export const zip = () => {
	deleteAsync(`${app.path.rootFolder}${camelize(process.env.PROJECT_NAME)}.zip`);
	return (
		app.gulp
			.src(`${app.path.buildFolder}/**/*`, {})
			// .pipe(
			//   app.plugins.plumber(
			//     app.plugins.notify.onError({
			//       title: 'ZIP',
			//       message: 'Error: <%= error.message %>',
			//     })
			//   )
			// )
			.pipe(zipPlugin(`${camelize(process.env.PROJECT_NAME)}.zip`))
			.pipe(app.gulp.dest(app.path.rootFolder))
	);
};
