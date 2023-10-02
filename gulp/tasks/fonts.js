import pjson from '../../package.json' assert { type: 'json' };
import newer from 'gulp-newer';

export const fonts = () => {
  return app.gulp
    .src(app.path.src.assetsFolder + 'fonts/**/*')
    .pipe(newer(app.path.buildFolder + 'assets/fonts'))
    .pipe(
      replace(
        /@fonts\//g,
        pjson.buildType == 'wordpress' ? get_template_directory_uri() + 'assets/fonts/' : '/assets/fonts/'
      )
    )
    .pipe(app.gulp.dest(app.path.buildFolder + 'assets/fonts/'));
};
