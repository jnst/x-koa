var gulp = require('gulp');
var server = require('gulp-develop-server');

gulp.task('default', function() {
  server.listen({
    path: './app.js',
    execArgv: ['--harmony']
  });
});
