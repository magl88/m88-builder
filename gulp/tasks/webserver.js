import pjson from '../../package.json' assert { type: 'json' };
import { create as browserSyncCreate } from 'browser-sync';

export const webServerCreate = browserSyncCreate();

export const webServer = () =>
  webServerCreate.init({
    logPrefix: 'browserSync',
    https: true,
    online: true,
    proxy: !!pjson.proxyURL && pjson.proxyURL,
    server:
      pjson.buildType !== 'html'
        ? false
        : {
            baseDir: app.path.buildFolder,
          },
  });

// proxy: app.webServerProxyURL,
// reloadDelay: 200,
// online: true,
// tunnel: true,
// tunnel: "my-private-site",
// online: true,
// host: 'localhost',
// logLevel: "debug",

// gulp.task('webServer', function () {
//   browserSync({
//     server: {
//       baseDir: './build/',
//     },
//     online: true,
//     host: 'localhost',
//     port: 9000,
//     logPrefix: 'webServer',
//   });
// });
