import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks');

gulp.task('default', gulp.series(
    'common:babel',
    'common:concat',
    'common:watch'
));