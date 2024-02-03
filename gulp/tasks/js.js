import projectConst from "../../package.json" assert { type: "json" };
import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import replace from "gulp-replace";
import { deleteSync } from "del";

export const concatLibs = () => {
  deleteSync(app.path.buildFolder + "js/libs.js", { force: true });
  deleteSync(app.path.src.jsFolder + "libs.js", { force: true });

  return app.gulp
    .src(app.path.src.jsFolder + "libs/**/*")
    .pipe(sourcemaps.init())
    .pipe(concat("libs.js"))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.src.jsFolder));
};

export const concatScripts = () => {
  deleteSync(app.path.buildFolder + "js/scripts.js", { force: true });
  deleteSync(app.path.src.jsFolder + "scripts.js", { force: true });

  return app.gulp
    .src(app.path.src.jsFolder + "scripts/**/*")
    .pipe(sourcemaps.init())
    .pipe(concat("scripts.js"))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.src.jsFolder));
};

export const jsBuild = () => {
  return app.gulp
    .src(app.path.src.jsFolder + "*.js")
    .pipe(app.gulp.dest(app.path.buildFolder + "js"));
};

export const minJS = () => {
  return app.gulp
    .src(app.path.buildFolder + "js/{main,scripts,libs}.js")
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.extname = ".min.js";
      }),
    )
    .pipe(app.gulp.dest(app.path.buildFolder + "js/"));
};

export const setJSMinPathOLD = () => {
  return app.gulp
    .src([app.path.buildFolder + "**/*.php", app.path.buildFolder + "**/*.html"])
    .pipe(replace("libs.js", "libs.min.js"))
    .pipe(replace("scripts.js", "scripts.min.js"))
    .pipe(replace("main.js", "main.min.js"))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

const setWPMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + "inc/functions/add-js.php"])
    .pipe(replace("libs.js", "libs.min.js"))
    .pipe(replace("scripts.js", "scripts.min.js"))
    .pipe(replace("main.js", "main.min.js"))
    .pipe(app.gulp.dest(app.path.buildFolder + "inc/functions/"));
};

const setPHPMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + "**/*.php"])
    .pipe(replace("libs.js", "libs.min.js"))
    .pipe(replace("scripts.js", "scripts.min.js"))
    .pipe(replace("main.js", "main.min.js"))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

const setHtmlMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + "*.html"])
    .pipe(replace("libs.js", "libs.min.js"))
    .pipe(replace("scripts.js", "scripts.min.js"))
    .pipe(replace("main.js", "main.min.js"))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const setJSMinPath =
  projectConst.buildType === "html"
    ? setHtmlMinPath
    : projectConst.buildType === "php"
      ? setPHPMinPath
      : setWPMinPath;

export const js = gulp.series(gulp.parallel(concatLibs, concatScripts), jsBuild);
