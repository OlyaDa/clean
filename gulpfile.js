const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
 
gulp.task('prefixer', () =>
    gulp.src('dev/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
);

gulp.task('start',function(){
  gulp.watch('dev/css/', gulp.series('prefixer'));
});

