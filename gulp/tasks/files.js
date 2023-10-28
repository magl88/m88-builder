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
        primaryBefore: '/assets/img/',
        secondaryFormat: 'webp',
        secondaryAfter: '/assets/img/',
        secondaryBefore: '/assets/img/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const html = () => {
  return app.gulp
    .src(app.path.srcFolder + '*.html')
    .pipe(fileinclude())
    .pipe(replace(/@root\//g, '/'))
    .pipe(replace(/@src\//g, '/'))
    .pipe(replace(/@assets\//g, '/assets/'))
    .pipe(replace(/@fonts\//g, '/assets/fonts/'))
    .pipe(replace(/@img\//g, '/assets/img/'))
    .pipe(replace(/@sprite\//g, '/assets/sprite/'))
    .pipe(replace(/@svg\//g, '/assets/svg/'))
    .pipe(replace(/@scss\//g, '/scss/'))
    .pipe(replace(/@css\//g, '/css/'))
    .pipe(replace(/@js\//g, '/js/'))
    .pipe(
      pictureHtml({
        primaryFormat: 'avif',
        primaryAfter: '/assets/img/',
        primaryBefore: '/assets/img/',
        secondaryFormat: 'webp',
        secondaryAfter: '/assets/img/',
        secondaryBefore: '/assets/img/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const php = () => {
  return app.gulp
    .src([app.path.srcFolder + '*.php', app.path.srcFolder + 'inc/**/*.php'])
    .pipe(replace(/@root\//g, '/'))
    .pipe(replace(/@src\//g, '/'))
    .pipe(replace(/@assets\//g, '/assets/'))
    .pipe(replace(/@fonts\//g, '/assets/fonts/'))
    .pipe(replace(/@img\//g, '/assets/img/'))
    .pipe(replace(/@sprite\//g, '/assets/sprite/'))
    .pipe(replace(/@svg\//g, '/assets/svg/'))
    .pipe(replace(/@scss\//g, '/scss/'))
    .pipe(replace(/@css\//g, '/css/'))
    .pipe(replace(/@js\//g, '/js/'))
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
