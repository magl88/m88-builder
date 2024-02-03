import newer from "gulp-newer";

export const fonts = () => {
  return app.gulp
    .src(app.path.src.assetsFolder + "fonts/**/*")
    .pipe(newer(app.path.buildFolder + "assets/fonts/"))
    .pipe(app.gulp.dest(app.path.buildFolder + "assets/fonts/"));
};
