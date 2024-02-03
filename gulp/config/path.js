import * as nodePath from "path";
import projectConst from "../../package.json" assert { type: "json" };
const projectFolderName = nodePath.basename(nodePath.resolve());

const rootFolder = `./`;
const buildFolder = !projectConst.buildFolder ? `${rootFolder}build/` : projectConst.buildFolder;
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
