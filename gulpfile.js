const gulp = require('gulp')
      webpack = require('webpack-stream')
gulp.task('default',() => {
  gulp.src('./src/*.js')
    .pipe(webpack('./webpack.config.js'))
    .pipe(gulp.dest('./dist/'))
})