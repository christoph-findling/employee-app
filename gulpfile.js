// require modules
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var mqpacker = require("css-mqpacker");
var csswring = require("csswring");

/* Convenience variables */
var npmPath = "node_modules/";
var libs = "js/src/libs/";
var jsPath = "js/src/";
var paths = {
  stylesheets: ["scss/**/*.scss"],
  jsFiles: [
    libs + "classList.min.js",
    npmPath + "qwest/qwest.min.js",
    jsPath + "theme-init.js",
    jsPath + "jt-*.js",
    jsPath + "theme.js"
  ],
  jsMinFileLocation: "js/",
  jsMinFile: "theme.min.js",
  cssFilesLocation: "./",
  cssMinFileLocation: "./",
  cssFiles: ["*.css"],
  views: ["*.php", "*.html"]
};

gulp.task("themeScript", function() {
  return gulp
    .src(paths.jsFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .on(
      "error",
      notify.onError(function(error) {
        return error.message;
      })
    )
    .pipe(concat(paths.jsMinFile))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.jsMinFileLocation));
});

gulp.task("themeStylesheet", function() {
  var processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
    mqpacker({ sort: true }),
    csswring
  ];

  return gulp
    .src(paths.stylesheets)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on(
        "error",
        notify.onError(function(error) {
          return error.message;
        })
      )
    )
    .pipe(postcss(processors))
    .pipe(
      sourcemaps.write(".", {
        sourceMappingURL: function(file) {
          return file.relative + ".map?" + Date.now();
        }
      })
    )
    .pipe(gulp.dest(paths.cssFilesLocation));
});

gulp.task("watch", function() {
  // stylesheets
  gulp.watch(paths.stylesheets, gulp.series("themeStylesheet"));

  // scripts
  gulp.watch(paths.jsFiles, gulp.series("themeScript"));
});

gulp.task("default", gulp.parallel("themeScript", "themeStylesheet", "watch"));
