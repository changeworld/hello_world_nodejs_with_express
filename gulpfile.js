var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('test', function() {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({reporter: 'mocha-junit-reporter'}));
});

gulp.task('cover', function() {
  return gulp.src('./test/**/*.js')
    .pipe(mocha())
    .pipe(istanbul.writeReports({reporters: [ 'lcov', 'json', 'text', 'text-summary', 'cobertura']}))
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});