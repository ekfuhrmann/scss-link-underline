'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('scss', () => {
  return gulp
    .src('./src/*.scss')
    .pipe($.concat('_link-underline.scss'))
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('./dist/'));
});

// The main building block task
gulp.task('build', gulp.series('scss'));

gulp.task('watch', done => {
  gulp.watch('src/*', gulp.series('scss'));
  done();
});

gulp.task('default', gulp.series('build', 'watch'));
