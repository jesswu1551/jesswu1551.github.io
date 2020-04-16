"use strict";

const del = require("del");
const gulp = require("gulp");
const babel = require('gulp-babel');
const autoprefixer = require("gulp-autoprefixer");
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");

const merge = require("merge-stream");
const browsersync = require("browser-sync").create();

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3030,
    open: true,
    notify: false
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function build_scss() {
  return gulp
    .src(['./**/*.scss', '!./node_modules/**/*'])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("./"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch(['./**/*.scss', '!./node_modules/**/*'], build_scss);
  gulp.watch(['./**/*.css', './**/*.js', './**/*.html', '!./node_modules/**/*'], browserSyncReload);
}

const build = gulp.series(build_scss);
const watch = gulp.series(build_scss, gulp.parallel(watchFiles, browserSync));



// Export tasks
exports.build = build;
exports.watch = watch;

exports.default = build;
