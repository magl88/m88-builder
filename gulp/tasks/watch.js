import pjson from '../../package.json' assert { type: 'json' };
import * as tasks from './index.js';

export const watch = () => {
  app.gulp.watch(app.path.buildFolder + '**/*').on('all', tasks.webServerCreate.reload);

  app.gulp.watch(app.path.src.assetsFolder + 'svg/**/*').on('all', app.gulp.series(tasks.svg));
  app.gulp.watch(app.path.src.assetsFolder + 'fonts/**/*').on('all', app.gulp.series(tasks.fonts));
  app.gulp.watch(app.path.src.assetsFolder + 'favicons/**/*').on('all', app.gulp.series(tasks.favicons));
  // app.gulp.watch(app.path.buildFolder + '**/*.{html,php}').on('all', app.gulp.series(tasks.setImg));
  app.gulp.watch(app.path.srcFolder + '**/*.html').on('all', app.gulp.series(tasks.html));
  app.gulp
    .watch(app.path.srcFolder + '**/*.php')
    .on('all', app.gulp.series(pjson.buildType == 'php' ? tasks.php : tasks.wordpress));
  app.gulp.watch(app.path.src.scssFolder + '**/*.*').on('all', app.gulp.series(tasks.scss));
  app.gulp.watch(app.path.src.jsFolder + 'scripts/*.js').on('all', app.gulp.series(tasks.concatScripts));
  app.gulp.watch(app.path.src.jsFolder + 'libs/*.js').on('all', app.gulp.series(tasks.concatLibs));
  app.gulp.watch(app.path.src.jsFolder + '*.js').on('all', app.gulp.series(tasks.jsBuild));
  app.gulp.watch(app.path.src.imagesFolder + '**/*.*').on('all', app.gulp.series(tasks.images));
};
