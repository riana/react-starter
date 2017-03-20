//jshint esversion:6
// jshint node:true

'use strict';

const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');

var webpackStream = require('webpack-stream');
var webpack2 = require('webpack');

const dist = "dist/";
const lib = "lib/";

gulp.task("clean", function (cb) {
	del.sync([dist]);
	cb();
});

gulp.task("default", function (cb) {
	runSequence('clean', 'webpack', cb);
});

gulp.task('dev', ['webpack'], function () {
	gulp.watch('./src/**/*', ['webpack']);
});

gulp.task("webpack", function () {
	return gulp.src('src/index.tsx')
    .pipe(webpackStream(require('./webpack.config.js'), webpack2))
    .pipe(gulp.dest(lib));
 });
