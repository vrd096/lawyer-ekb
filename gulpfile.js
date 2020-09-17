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
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src("source/*.html")
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src("source/js/**/*.js")
    .pipe(sourcemaps.init())
    // .pipe(
    //   babel({
    //     presets: ["@babel/env"]
    //   })
    // )
    // .on("error", console.error.bind(console))
    // .pipe(
    //   uglify({
    //     toplevel: true
    //   })
    // )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
}

// function images() {
//   return gulp
//     .src("source/img/**/*.{png,jpg,svg}")
//     .pipe(
//       imagemin([
//         imagemin.optipng({ optimizationLevel: 3 }),
//         imagemin.mozjpeg({ progressive: true }),
//         imagemin.svgo()
//       ])
//     )
//     .pipe(gulp.dest("source/img"));
// }

function imgToWebp() {
  return gulp
    .src("source/img/**/*.{png, jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
}

function copy() {
  return gulp
    .src(["source/fonts/**/**", "source/img/**", "source/js/**"], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
}

function clean() {
  return del("build");
}

function watch() {
  browserSync.init({
    server: "build/"
  });

  gulp.watch("source/sass/**/*.scss", styles);
  gulp.watch("source/js/**/*.js", scripts);
  gulp.watch("source/*.html", html);
  gulp.watch("source/sass/**/*.scss").on("change", browserSync.reload);
}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("watch", watch);
gulp.task("clean", clean);
gulp.task(
  "build",
  gulp.series(
    clean,
    imgToWebp,
    copy,
    gulp.parallel(html, styles, scripts)
  )
);
gulp.task("start", gulp.series("build", "watch"));
