var gulp = require("gulp");
var typescript = require("gulp-typescript");
var webserver = require('gulp-webserver');

gulp.task("default", function () {
    gulp.src(["./test/src/**/*.ts"])
        .pipe(typescript({ target: "ES5", removeComments: true, sortOutput: true }))
        .js
        .pipe(gulp.dest("./test/src/"));
});

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task("watch", function () {
    gulp.watch(["./test/src/**/*.ts"], ["default"]);
});

gulp.task("dev", ["webserver", "watch"]);
