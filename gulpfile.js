var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('transpilate', function () {
  gulp.src('auth.js')
    .pipe(babel())
    .pipe(gulp.dest('trans'));

  gulp.src('users.js') 
    .pipe(babel())
    .pipe(gulp.dest('trans'));

  gulp.src('./lib/utils.js') 
    .pipe(babel())
    .pipe(gulp.dest('trans'));

  gulp.src('config.js') 
    .pipe(babel())
    .pipe(gulp.dest('trans'));

  gulp.src('./test/stub/db.js') 
    .pipe(babel())
    .pipe(gulp.dest('trans'));

  gulp.src('./test/fixtures/index.js') 
    .pipe(babel())
    .pipe(gulp.dest('trans'));

});

gulp.task('default', ['transpilate']);
