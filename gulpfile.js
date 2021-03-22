var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
autoprefixer = require('gulp-autoprefixer');
concatCss = require('gulp-concat-css');
ftp = require('gulp-ftp');

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('src/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('ftp', function() {
    return gulp.src('src/**')
        .pipe(ftp({
            host: 'website.com',
            user: 'johndoe',
            pass: '1234',
            remotePath: 'www/takajatopapka'
        }))
        .pipe(gutil.noop());
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('src/**/*.html').on('change', browserSync.reload); // наблюдение за изменением в html и перезагрузка

    gulp.watch('src/js/*.js').on("change", browserSync.reload);
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));