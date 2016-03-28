var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');

/*
  Genera la versión minificada de todos los ficheros
  html, js y css que contiene el proyecto. Los ficheros
  resultantes son almacenados en el directorio 'minified'
  
  dependencia: gulp-minifier
  instalar dependencia: npm install --save-dev gulp-minifier
*/
var DEST = 'minified';
gulp.task('minify', function() {
  return gulp.src(['*.html', '*.js', '**/*.css'])
    .pipe(minify({
      collapseWhitespace: true,
      conservativeCollapse: false,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(DEST));
});

/*
  Elimina todos los elementos dentro del directorio 'minified'
  
  dependencia: delgulp minify-html
  instalar dependencia: npm install --save-dev gulp del
*/
gulp.task('clean', function(cb) {
  del([
    // Eliminar todos los ficheros dentro de la carpeta minified
    'minified/*',
  ], cb);
});