const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-uglify");
const settings = require(__dirname + "/setting.js");
console.log(settings);
gulp.task("sass-compile", () => {
    return gulp.src(settings.sass_path.file, { base: settings.sass_path.directory })
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(settings.sass_path.dest));
})

gulp.task("js-minify", () => {
    return gulp.src(settings.js_path.file, { base: settings.js_path.directory })
        .pipe(minify())
        .pipe(gulp.dest(settings.js_path.dest));
})

gulp.task("img-copy", () => {
    return gulp.src(settings.img_path.file, { base: settings.img_path.directory })
        .pipe(gulp.dest(settings.img_path.dest));
})

gulp.task("font-copy", () => {
    return gulp.src(settings.font_path.file, { base: settings.font_path.directory })
        .pipe(gulp.dest(settings.font_path.dest));
})

gulp.task("sass-watch", () => {
    return gulp.watch(settings.sass_path.file, gulp.series("sass-compile", "sass-watch"));
})

gulp.task("js-watch", () => {
    return gulp.watch(settings.js_path.file, gulp.series("js-minify", "js-watch"));
})

gulp.task("img-watch", () => {
    return gulp.watch(settings.img_path.file, gulp.series("img-copy", "img-watch"));
})

gulp.task("font-watch", () => {
    return gulp.watch(settings.font_path.file, gulp.series("font-copy", "font-watch"))
})

gulp.task("default",
    gulp.series(
        "sass-compile",
        "js-minify",
        "img-copy",
        "font-copy",
        gulp.parallel(
            "sass-watch",
            "js-watch",
            "img-watch",
            "font-watch"
        )
    )
);