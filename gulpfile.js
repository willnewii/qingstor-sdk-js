// +-------------------------------------------------------------------------
// | Copyright (C) 2016 Yunify, Inc.
// +-------------------------------------------------------------------------
// | Licensed under the Apache License, Version 2.0 (the "License");
// | you may not use this work except in compliance with the License.
// | You may obtain a copy of the License in the LICENSE file, or at:
// |
// | http://www.apache.org/licenses/LICENSE-2.0
// |
// | Unless required by applicable law or agreed to in writing, software
// | distributed under the License is distributed on an "AS IS" BASIS,
// | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// | See the License for the specific language governing permissions and
// | limitations under the License.
// +-------------------------------------------------------------------------

'use strict';
require('./src/version');

const path = require('path');
const util = require('util');

const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const exec = util.promisify(require('child_process').exec);

function clean(cb) {
  exec('rm -rf dist', () => {
    cb();
  });
}

function bundle(cb) {
  webpack(webpackConfig).run(function(err, stats) {
    if (err) {
      throw err;
    }

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    cb();
  });
}

function minify() {
  return gulp.src('./dist/**/*.js')
    .pipe(terser())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./dist/'));
}

function compress(cb) {
  exec([
    'cd ./dist',
    `zip qingstor-sdk-${global.version}.zip *.js`,
    `tar -czvf qingstor-sdk-${global.version}.tar.gz *.js`,
  ].join(' && ')).then(() => {
    cb();
  }).catch((err) => {
    console.log(err);
  });
}

exports.bundle = gulp.series(clean, bundle);
exports.minify = gulp.series(clean, bundle, minify);
exports.compress = gulp.series(clean, bundle, minify, compress);
