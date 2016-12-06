var gulp    = require('gulp');
var path    = require('path');
var Karma   = require('karma').Server;
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var header  = require('gulp-header');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var rimraf  = require('rimraf');
var package = require('./package.json');

var banner =  '/* v<%=package.version%>|(c)'+new Date().getFullYear()+' <%=package.author%>|<%=package.homepage%> */\n';

gulp.task('clean', function (done) {
  rimraf('./dist/*', done);
});

gulp.task('cleanCoverage', function (done) {
  rimraf('./coverage', done);
});

gulp.task('jshint', function () {
  return gulp.src('./src/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('./src/*.js')
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['cleanCoverage'], function(done) {
  new Karma({
    configFile: path.join(__dirname, 'test/karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('default', [
  'jshint',
  'scripts',
  'test'
]);
