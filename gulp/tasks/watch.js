import projectConst from '../../package.json' assert { type: 'json' };
import * as tasks from './index.js';

export const watch = () => {
  app.gulp
    .watch(app.path.src.assetsFolder + 'svg/**/*')
    .on('all', app.gulp.series(tasks.svg, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.assetsFolder + 'fonts/**/*')
    .on('all', app.gulp.series(tasks.fonts, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.assetsFolder + 'favicons/**/*')
    .on('all', app.gulp.series(tasks.favicons, tasks.webServerCreate.reload));
  app.gulp.watch(app.path.srcFolder + '**/*.html').on('all', app.gulp.series(tasks.html, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.srcFolder + '**/*.php')
    .on(
      'all',
      app.gulp.series(projectConst.buildType == 'php' ? tasks.php : tasks.wordpress, tasks.webServerCreate.reload)
    );
  app.gulp
    .watch(app.path.src.scssFolder + '**/*.*')
    .on('all', app.gulp.series(tasks.scss, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.jsFolder + 'scripts/*.js')
    .on('all', app.gulp.series(tasks.concatScripts, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.jsFolder + 'libs/*.js')
    .on('all', app.gulp.series(tasks.concatLibs, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.jsFolder + '*.js')
    .on('all', app.gulp.series(tasks.jsBuild, tasks.webServerCreate.reload));
  app.gulp
    .watch(app.path.src.imagesFolder + '**/*.*')
    .on('all', app.gulp.series(tasks.images, tasks.webServerCreate.reload));
};
