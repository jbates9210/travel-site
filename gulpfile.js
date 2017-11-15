var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Gulp task created!");
});

gulp.task('html', function() {
  console.log("Gulp task #2 ran successfully!");
});

gulp.task('watch', function() {
  watch('./app/index.html', function(){
    gulp.start('html');
  });
});
