import babel from 'gulp-babel';

export default function() {
    return babel({
        presets: ['es2015']
    });
}