import fileinclude from 'gulp-file-include';
import pictureHtml from 'gulp-webp-avif-html-nosvg-nogif-lazyload';
import replace from 'gulp-replace';

export const setImg = () => {
  return app.gulp
    .src(app.path.buildFolder + '**/*.{php,html}')
    .pipe(
      pictureHtml({
        primaryFormat: 'avif',
        primaryAfter: '/assets/img/',
        primaryBefore: '/assets/avif/',
        secondaryFormat: 'webp',
        secondaryAfter: '/assets/img/',
        secondaryBefore: '/assets/webp/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const html = () =>
  app.gulp
    .src(app.path.srcFolder + '*.html')
    .pipe(fileinclude())
    .pipe(replace(/@img\//g, '/assets/img/'))
    .pipe(
      pictureHtml({
        primaryFormat: 'avif',
        primaryAfter: '/assets/img/',
        primaryBefore: '/assets/avif/',
        secondaryFormat: 'webp',
        secondaryAfter: '/assets/img/',
        secondaryBefore: '/assets/webp/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder));

export const php = () =>
  app.gulp
    .src([app.path.srcFolder + '*.php', app.path.srcFolder + 'inc/**/*.php'])
    .pipe(replace(/@img\//g, 'assets/img/'))
    .pipe(
      pictureHtml({
        primaryFormat: 'avif',
        primaryAfter: '/assets/img/',
        primaryBefore: '/assets/avif/',
        secondaryFormat: 'webp',
        secondaryAfter: '/assets/img/',
        secondaryBefore: '/assets/webp/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder));
