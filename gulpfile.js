const { src, dest, parallel } = require("gulp");

// Imágenes WEBP y Avif
const cache = require("gulp-cache");
const webp = require('gulp-webp');
const imagemin = require("gulp-imagemin");
const avif = require("gulp-avif");

// imágenes en general
function images(done) {

    const options = {
        optimizationLevel: 3,
    }

    src("img/**/*.*")
        .pipe(cache(imagemin(options)))
        .pipe(dest("img/minified"));

    done();
}

// convierte imágenes de cualquier formato a webp
function webpVersion(done) {

    const options = {
        quality: 50,
    }

    src("img/**/*.*")
        .pipe(webp(options))
        .pipe(dest("img/webp"));


    done();
}
// convierte imágenes de cualquier formato a avif
function avifVersion(done) {

    const options = {
        quality: 50,
    }

    src("img/**/*.*")
        .pipe(avif(options))
        .pipe(dest("img/avif"));


    done();
}

exports.images = images;
exports.webpVersion = webpVersion;
exports.avifVersion = avifVersion;
exports.compressedImg = parallel(images, webpVersion, avifVersion);

