import projectConst from '../../package.json' assert { type: 'json' };
import { create as browserSyncCreate } from 'browser-sync';

export const webServerCreate = browserSyncCreate();

export const webServer = () =>
  webServerCreate.init({
    logPrefix: 'browserSync',
    https: true,
    port: projectConst.port || 3000,
    proxy: !!projectConst.proxyURL && projectConst.proxyURL,
    server:
      projectConst.buildType !== 'html'
        ? false
        : {
            baseDir: app.path.buildFolder,
          },
  });
