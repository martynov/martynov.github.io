const { series } = require('gulp');
const browserSync = require('browser-sync').create();

function server () {
    return browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}

exports.default = series(server);
