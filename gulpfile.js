var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var autoprefixerCore = require('autoprefixer-core');
var browserSync = require('browser-sync').create();
//var postcssFunctionsVar = require('postcss-functions');


gulp.task('default', function(){
    console.log("Hooray - you created a Gulp task.");
}); 

gulp.task('html', function(){
     console.log("Imagine useful task being run using html task");
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixerCore({ browsers: ["> 0%"] })]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

    browserSync.init({ 
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', function(){
        //gulp.start('html');
        browserSync.reload();
    });

    watch('./app/assets/styles/styles.css', function(){
        gulp.start('styles');
    });
});