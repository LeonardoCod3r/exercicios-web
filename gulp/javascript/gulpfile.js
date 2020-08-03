const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat("codigo.reduced.js"))
        .pipe(gulp.dest('out'));
}

function fim(cb) {
    console.log("Fim!");
    return cb();
}

exports.default = series(transformacaoJS, fim);