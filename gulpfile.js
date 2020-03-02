const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const postcss = require("gulp-postcss");
const uglify = require("gulp-uglify");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const del = require("del");
const browserSync = require("browser-sync").create();

function styles() {
  return gulp
    .src("source/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat("style.css"))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src("source/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .on("error", console.error.bind(console))
    .pipe(
      uglify({
        toplevel: true
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
}

// gulp.task("images", function() {
//   return gulp
//     .src("source/img/**/*.{png,jpg,svg}")
//     .pipe(
//       imagemin([
//         imagemin.optipng({ optimizationLevel: 3 }),
//         imagemin.jpegtran({ progressive: true }),
//         imagemin.svgo()
//       ])
//     )
//     .pipe(gulp.dest("source/img"));
// });

// gulp.task("webp", function() {
//   return gulp
//     .src("source/img/**/*.{png, jpg}")
//     .pipe(webp({ quality: 90 }))
//     .pipe(gulp.dest("source/img"));
// });

function copy() {
  return gulp
    .src(["source/*.html, source/fonts/**/*.{woff,woff2}", "source/img/**", "source/js/**"], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
}

function clean() {
  return del("build");
}

function watch() {
  browserSync.init({
    server: "source/"
  });

  gulp.watch("source/sass/**/*.scss", styles);
  gulp.watch("source/js/**/*.js", scripts);
  gulp.watch("source/*.html").on("change", browserSync.reload);
}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("watch", watch);
gulp.task("build", gulp.series(clean, copy, gulp.parallel(styles, scripts)));

// gulp.task(
//   "build",
//   gulp.series(["clean"], gulp.parallel(["style"], ["scripts"]))
// );
gulp.task("dev", gulp.series("build", "watch"));
