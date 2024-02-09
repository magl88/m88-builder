import "dotenv/config";

const rootFolder = `./`;
const buildFolder = !process.env.BUILD_FOLDER ? `${rootFolder}build/` : process.env.BUILD_FOLDER;
const srcFolder = `${rootFolder}src/`;
const wpFolder = `${rootFolder}src/wordpress/`;

export const path = {
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	wpFolder: wpFolder,
	src: {
		componentsFolder: `${srcFolder}components/`,
		assetsFolder: `${srcFolder}assets/`,
		incFolder: `${srcFolder}inc/`,
		jsFolder: `${srcFolder}js/`,
		scssFolder: `${srcFolder}scss/`,
		imagesFolder: `${srcFolder}assets/img/`,
	},
};
