'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var connect = require('gulp-connect');

gulp.task('compile', function() {
  console.log('compile css')
  return gulp.src('./src/zhanwang/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    // .pipe(gulp.dest('../../product/doctorwx/src/page/_doctor/'))
    .pipe(gulp.dest('./lib/zhanwang'))
    .pipe(connect.reload())
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('auto', function() {
  gulp.watch('./src/*/*.scss',['compile'])
})

gulp.task('server', function() {
  connect.server({
    root:'test',
    livereload: true
  })
})
gulp.task('build', ['server','auto']);
