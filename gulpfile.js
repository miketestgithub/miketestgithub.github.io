var gulp = require('gulp');
var stylus = require('gulp-stylus');
var imageop = require('gulp-image-optimization');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');


// gulp.task('hi', function() {
//   console.log('hi, Mike, you are cool!')
// });

gulp.task('sourcing', function() {
	return gulp.src('dev/*') // Get source files with gulp.src
	    .pipe(gulp.dest('./output')) // Outputs the file in the destination folder
});

gulp.task('stylus-task', function() {
  return gulp.src('dev/css/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('output/css'))
    .pipe(browserSync.reload({
      stream: true
    }))    
});

gulp.task('images-opt', function(cb) {
    gulp.src(['dev/**/*.png','dev/**/*.jpg','dev/**/*.gif','dev/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 2,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('output')).on('end', cb).on('error', cb);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "output"
    },
  })
});

gulp.task('useref', function(){
  return gulp.src('dev/*.html')
    .pipe(useref())
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('output'))
});


gulp.task('watch', ['browserSync','stylus-task', 'useref'], function(){
	gulp.watch('dev/css/*.styl', ['stylus-task']); 
	gulp.watch('dev/*.html', browserSync.reload); 
	gulp.watch('dev/js/**/*.js', browserSync.reload); 
});