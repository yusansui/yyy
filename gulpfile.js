 var mincss = require('gulp-clean-css')
 var gulp = require('gulp')
 var rename = require('gulp-rename')


    gulp.task('minCss',function(){
        gulp.src('./css/style.css')
            .pipe(mincss())
            .pipe(gulp.dest('./css/'))
    })
        var rename = require('gulp-rename');

    gulp.task('rename',function(){
        gulp.src('./css/style.css')
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('./css/'))
    })

    gulp.task('default',['minCss','rename'])



// var gulp = require('gulp'),
//   connect = require('gulp-connect');

// gulp.task('connect', function() {
//   connect.server({
//     root: 'app',
//     livereload: true
//   });
// });

// gulp.task('html', function () {
//   gulp.src('./app/*.html')
//     .pipe(connect.reload());
// });

// gulp.task('watch', function () {
//   gulp.watch(['./app/*.html'], ['html']);
// });

// gulp.task('default', ['connect', 'watch']);

