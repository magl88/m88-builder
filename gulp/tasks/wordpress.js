import pjson from '../../package.json' assert { type: 'json' };
import replace from 'gulp-replace';
import gulp from 'gulp';

export const wpFiles = () =>
  app.gulp
    .src([
      app.path.srcFolder + '**/*.php',
      '!' + app.path.srcFolder + 'wordpress/**',
      '!' + app.path.srcFolder + 'components/**',
      '!' + app.path.srcFolder + 'php/**',
    ])
    .pipe(replace(/@root\//g, get_template_directory_uri() + '/'))
    .pipe(replace(/@src\//g, get_template_directory_uri() + '/'))
    .pipe(replace(/@assets\//g, get_template_directory_uri() + '/assets/'))
    .pipe(replace(/@fonts\//g, get_template_directory_uri() + '/assets/fonts/'))
    .pipe(replace(/@img\//g, get_template_directory_uri() + '/assets/img/'))
    .pipe(replace(/@sprite\//g, get_template_directory_uri() + '/assets/sprite/'))
    .pipe(replace(/@svg\//g, get_template_directory_uri() + '/assets/svg/'))
    .pipe(replace(/@scss\//g, get_template_directory_uri() + '/scss/'))
    .pipe(replace(/@css\//g, get_template_directory_uri() + '/css/'))
    .pipe(replace(/@js\//g, get_template_directory_uri() + '/js/'))
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

export const wpScreenshot = () =>
  app.gulp.src([app.path.srcFolder + 'screenshot.png']).pipe(app.gulp.dest(app.path.buildFolder));

export const wpStyle = () =>
  app.gulp
    .src([app.path.srcFolder + 'style.css'])
    .pipe(replace('ThemeName', pjson.name))
    .pipe(app.gulp.dest(app.path.buildFolder));

export const wordpress = gulp.parallel(wpStyle, wpFiles, wpScreenshot);
