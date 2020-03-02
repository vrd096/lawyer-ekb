let gulp = require("gulp");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let minify = require("gulp-csso");
let rename = require("gulp-rename");
let imagemin = require("gulp-imagemin");
let webp = require("gulp-webp");
let del = require("del");
let server = require("browser-sync").create();



gulp.task("style", function() {
    gulp.src("source/sass/style.sccs")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function(){
  return gulp.src("source/img/**/*.{png, jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("source/img"));
});

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});


gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    done
  );
});

gulp.task("serve", function(){
  server.init({
    server: "build/"
  });

  gulp.watch("source/sass/**/*.sccs", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
