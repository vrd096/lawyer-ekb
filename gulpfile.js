let gulp = require("gulp");
let less = require("gulp-less");
let plumber = require("gulp-less");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");

gulp.task("style", function() {
    gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest)
});