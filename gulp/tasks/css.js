import pjson from '../../package.json' assert { type: 'json' };
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
// import webpcss from 'gulp-webpcss';

import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

export const scss = () => {
  return app.gulp
    .src([
      app.path.src.scssFolder + '**/*.scss',
      '!' + app.path.src.scssFolder + 'base/**',
      '!' + app.path.src.scssFolder + 'sections/**',
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.buildFolder + 'css'));
};

export const minCss = () => {
  return (
    app.gulp
      .src([app.path.buildFolder + 'css/**/*.css', `!${app.path.buildFolder}css/**/*.min.css`])
      .pipe(autoprefixer(['last 5 versions', '> 2%']))
      // .pipe(
      //   webpcss({
      //     webpClass: '.webp',
      //     noWebpClass: '.no-webp',
      //   })
      // )
      .pipe(groupCssMediaQueries())
      .pipe(cleanCSS())
      .pipe(
        rename(function (path) {
          path.extname = '.min.css';
        })
      )
      .pipe(app.gulp.dest(app.path.buildFolder + 'css/'))
  );
};

const setWPMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + 'inc/functions/add-styles.php'])
    .pipe(replace('styles.css', 'styles.min.css'))
    .pipe(app.gulp.dest(app.path.buildFolder + 'inc/functions/'));
};

const setPHPMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + '**/*.php'])
    .pipe(replace('styles.css', 'styles.min.css'))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

const setHtmlMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + '*.html'])
    .pipe(replace('styles.css', 'styles.min.css'))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const setCssMinPath =
  pjson.buildType === 'html' ? setHtmlMinPath : pjson.buildType === 'php' ? setPHPMinPath : setWPMinPath;
