var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')();

var config = {
  sassPath: './scss'
}

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 4000
  })
});

gulp.task('browserify', function () {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('move-images',function(){
  return gulp.src([
    './images/*.*'
  ],  {base: './images/'}) 
  .pipe(gulp.dest('./public/images/'));
});

gulp.task('style', function () {
  return gulp.src([config.sassPath + '/style.scss'])
    .pipe($.sass())
    .pipe($.autoprefixer('last 10 version'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('uglify', function() {
  gulp.src('public/js/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function() {
  return gulp.src('public/css/*.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch(config.sassPath + '/**/*.scss', ['style'])
})

gulp.task('default', ['connect', 'move-images', 'watch']);
gulp.task('build', ['uglify', 'minify-css']);