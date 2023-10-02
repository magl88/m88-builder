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
    .pipe(replace(/@img\//g, get_template_directory_uri() + 'assets/img/'))
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
  app.gulp.src([app.path.srcFolder + 'wordpress/screenshot.png']).pipe(app.gulp.dest(app.path.buildFolder));

export const wpStyle = () =>
  app.gulp
    .src([app.path.srcFolder + 'wordpress/style.css'])
    .pipe(replace('ThemeName', pjson.name))
    .pipe(app.gulp.dest(app.path.buildFolder));

export const wordpress = gulp.parallel(wpStyle, wpFiles, wpScreenshot);
