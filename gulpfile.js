const gulp = require('gulp');
const ComprimeIMG = require('gulp-imagemin'); 
const ComprimeJS = require('gulp-uglify');
const CompilaSass = require('gulp-sass')(require('sass'));



//funções
function ComprimirIMG(){
    return gulp.src('./source/images/*')
    .pipe(ComprimeIMG())
    .pipe(gulp.dest('./build/images'));
};

function comprimirJS(){
    return gulp.src('./source/scripts/*.js')
    .pipe(ComprimeJS())
    .pipe(gulp.dest('./build/scripts'));
};


function Sass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(CompilaSass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./build/styles'));
};


//exporta funções
exports.default = function(){
    gulp.watch( './source/images/*',{ignoreInitial:false},gulp.series(ComprimirIMG));
    gulp.watch( './source/scripts/*.js',{ignoreInitial:false},gulp.series(comprimirJS));
    gulp.watch( './source/styles/main.scss',{ignoreInitial:false},gulp.series(Sass));
}