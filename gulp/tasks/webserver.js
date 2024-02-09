import "dotenv/config";
import { create as browserSyncCreate } from "browser-sync";

export const webServerCreate = browserSyncCreate();

export const webServer = () => {
	webServerCreate.init({
		logPrefix: "browserSync",
		https: true,
		port: Number(process.env.PORT) || 3000,
		proxy: !!process.env.PROXY_URL && process.env.PROXY_URL,
		server:
			process.env.BUILD_TYPE !== "html"
				? false
				: {
						baseDir: app.path.buildFolder,
					},
	});
};
