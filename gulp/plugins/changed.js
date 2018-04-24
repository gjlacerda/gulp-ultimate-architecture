import changed from 'gulp-changed';

export default function(dest) {
    return changed(dest);
}