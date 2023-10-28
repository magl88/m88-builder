import projectConst from '../../package.json' assert { type: 'json' };
import replace from 'gulp-replace';
import pictureHtml from 'gulp-webp-avif-html-nosvg-nogif-lazyload';
import gulp from 'gulp';

export const wpFiles = () => {
  return app.gulp
    .src([
      app.path.srcFolder + '**/*.php',
      '!' + app.path.srcFolder + 'inc/**',
      '!' + app.path.srcFolder + 'components/**',
      '!' + app.path.srcFolder + 'php/**',
    ])
    .pipe(
      pictureHtml({
        primaryFormat: 'avif',
        primaryAfter: '@img/',
        primaryBefore: '@img/',
        secondaryFormat: 'webp',
        secondaryAfter: '@img/',
        secondaryBefore: '@img/',
        srcsetOutput: 0,
        youtubeCoverWebp: true,
      })
    )
    .pipe(replace(/@root\//g, '<?php echo get_template_directory_uri();?>/'))
    .pipe(replace(/@src\//g, '<?php echo get_template_directory_uri();?>/'))
    .pipe(replace(/@assets\//g, '<?php echo get_template_directory_uri();?>/assets/'))
    .pipe(replace(/@fonts\//g, '<?php echo get_template_directory_uri();?>/assets/fonts/'))
    .pipe(replace(/@img\//g, '<?php echo get_template_directory_uri();?>/assets/img/'))
    .pipe(replace(/@sprite\//g, '<?php echo get_template_directory_uri();?>/assets/sprite/'))
    .pipe(replace(/@svg\//g, '<?php echo get_template_directory_uri();?>/assets/svg/'))
    .pipe(replace(/@scss\//g, '<?php echo get_template_directory_uri();?>/scss/'))
    .pipe(replace(/@css\//g, '<?php echo get_template_directory_uri();?>/css/'))
    .pipe(replace(/@js\//g, '<?php echo get_template_directory_uri();?>/js/'))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const wpInc = () => {
  return app.gulp.src([app.path.srcFolder + 'inc/**/*']).pipe(app.gulp.dest(app.path.buildFolder + 'inc'));
};

export const wpLanguages = () => {
  return app.gulp.src([app.path.srcFolder + 'languages/**/*']).pipe(app.gulp.dest(app.path.buildFolder));
};

export const wpScreenshot = () => {
  return app.gulp.src([app.path.srcFolder + 'screenshot.png']).pipe(app.gulp.dest(app.path.buildFolder));
};

export const wpStyle = () => {
  return app.gulp
    .src([app.path.srcFolder + 'style.css'])
    .pipe(replace('ThemeName', projectConst.name))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const wordpress = gulp.parallel(wpStyle, wpLanguages, wpFiles, wpInc, wpScreenshot);
