import gulp from 'gulp';
import babel from '../plugins/babel';
import changed from '../plugins/changed';
import cached from '../plugins/cached';

gulp.task('common:babel', () => {
    return gulp
        .src('src/js/**/**/*.js')
        .pipe(changed('dist/js/common'))
        //.pipe(cached('common:babel'))
        .pipe(babel())
        .pipe(gulp.dest('dist/js/common'));
});