import newer from "gulp-newer";

export const favicons = () => {
	return app.gulp
		.src(app.path.src.assetsFolder + "favicons/**/*")
		.pipe(newer(app.path.buildFolder + "assets/favicons"))
		.pipe(app.gulp.dest(app.path.buildFolder + "assets/favicons/"));
};
