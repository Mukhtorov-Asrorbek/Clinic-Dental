let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass')(require('sass'));
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');

gulp.task('scss', function(){
    return gulp
            .src('app/scss/**/*.scss')
            .pipe(sass({ outputStyle: 'compressed' }))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp
            .src(['node_modules/slick-carousel/slick/slick.js',
                'node_modules/aos/dist/aos.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
                .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
                .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: 'app/',
        },
    });
})

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
})

gulp.task('default', gulp.parallel('scss', 'script', 'js',  'browser-sync', 'watch'));


