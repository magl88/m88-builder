import gulp from 'gulp';
import avif from 'gulp-avif';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import newer from 'gulp-newer';

export const toAvif = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + '**/*.{png,jpg,jpeg}')
    .pipe(newer(app.path.buildFolder + 'assets/img'))
    .pipe(avif({ quality: 50 }))
    .pipe(app.gulp.dest(app.path.buildFolder + 'assets/img/'));
};

export const toWebp = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + '**/*.{png,jpg,jpeg}')
    .pipe(newer(app.path.buildFolder + 'assets/img'))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.buildFolder + 'assets/img/'));
};

export const toImageMin = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + '**/*.{png,jpg,jpeg}')
    .pipe(newer(app.path.buildFolder + 'assets/img'))
    .pipe(imagemin())
    .pipe(app.gulp.dest(app.path.buildFolder + 'assets/img/'));
};

export const images = gulp.parallel(toAvif, toWebp, toImageMin);
