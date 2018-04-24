import cached from 'gulp-cached';

export default function(key) {
    return cached(key);
}