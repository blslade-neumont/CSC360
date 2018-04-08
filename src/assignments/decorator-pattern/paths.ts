import path = require('path');
import mkdirp = require('mkdirp');
import rimraf = require('rimraf');

export const BASE_PATH = path.join(__dirname, '../../../');

export const ASSETS_PATH = path.join(BASE_PATH, 'assets');
export const TEMP_PATH = path.join(BASE_PATH, 'temp');

//Delete temp, then recreate it
rimraf.sync(TEMP_PATH);
mkdirp.sync(TEMP_PATH);
