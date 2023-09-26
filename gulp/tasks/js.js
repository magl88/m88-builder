import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import fs from 'fs';
import getFolderSize from 'get-folder-size';
import replace from 'gulp-replace';
import { deleteAsync, deleteSync } from 'del';

export const concatLibs = () => {
  const sizelibs = getFolderSize.loose(app.path.src.jsFolder + 'libs/');

  if (sizelibs === 0) {
    fs.writeFile(app.path.src.jsFolder + 'libs.js', '', function () {
      console.log('libs clear');
    });
    return;
  }

  return app.gulp
    .src(app.path.src.jsFolder + 'libs/**/*')
    .pipe(sourcemaps.init())
    .pipe(concat('libs.js'))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.src.jsFolder));
};

export const concatScripts = () => {
  const sizescripts = getFolderSize.loose(app.path.src.jsFolder + 'scripts');

  if (sizescripts === 0) {
    fs.writeFile(app.path.src.jsFolder + 'scripts.js', '', function () {
      console.log('scripts clear');
    });

    // deleteAsync(app.path.src.jsFolder + 'scripts.js', { force: true });
    return;
  }
  const delscripts = () => deleteAsync(app.path.src.jsFolder + 'scripts.js', { force: true });
  delscripts();
  return app.gulp
    .src(app.path.src.jsFolder + 'scripts/**/*')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.src.jsFolder));
};

export const jsBuild = () => {
  return app.gulp.src(app.path.src.jsFolder + '*.js').pipe(app.gulp.dest(app.path.buildFolder + 'js'));
};

export const minJS = () => {
  return app.gulp
    .src(app.path.buildFolder + 'js/{main,scripts,libs}.js')
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.extname = '.min.js';
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder + 'js/'));
};

export const setJSMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + '**/*.php', app.path.buildFolder + '**/*.html'])
    .pipe(replace('libs.js', 'libs.min.js'))
    .pipe(replace('scripts.js', 'scripts.min.js'))
    .pipe(replace('main.js', 'main.min.js'))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const js = gulp.series(gulp.parallel(concatLibs, concatScripts), jsBuild);
