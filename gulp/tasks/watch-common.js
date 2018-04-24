import gulp from 'gulp';

gulp.task('common:watch', () => {
    return gulp.watch('./src/js/**/**/*.js', gulp.series(
        'common:babel',
        'common:concat'
    ));
});