import gulp from 'gulp';
import uglify from '../plugins/uglify';
import changed from '../plugins/changed';

gulp.task('common:minify', () => {
    return gulp
        .src('src/js/**/**/*.js')
        .pipe(changed('dist/js/common'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/common'));
});