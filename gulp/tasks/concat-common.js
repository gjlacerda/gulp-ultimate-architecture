import gulp from 'gulp';
import concat from '../plugins/concat';

gulp.task('common:concat', () => {
    return gulp
        .src('dist/js/common/**/**/*.js')
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist/js'));
});