'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    change = require('gulp-changed');


/////PATH OF FILES
var SASS_SRC = './src/assets/scss/*.scss', 
    SASS_DEST = './src/assets/css';

///////////TASK
gulp.task('sass', function(){
return gulp.src(SASS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(change(SASS_DEST))
    .pipe(gulp.dest(SASS_DEST));
});

////SASS WATCH
gulp.task('watch', function(){
    gulp.watch(SASS_SRC, ['sass']);
});

//RUN DEFAULT
gulp.task('default', ['watch']);