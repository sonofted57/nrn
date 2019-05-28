var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['src/assets/sass/*/*.scss','src/assets/sass/*/*.scss','src/assets/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/assets/css"))
    .pipe(browserSync.stream());
});


//Move the javascript files into our /src/js/folder
gulp.task('js', function() {
  return gulp.src(['node_modules/jquery/dist/js/jquery.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

//Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./src"
  });

  gulp.watch(['src/assets/sass/*/*.scss','src/assets/sass/*/*.scss','src/assets/sass/*.scss'], ['sass']);
  gulp.watch(['src/*.html', 'src/*/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
