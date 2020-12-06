const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')

gulp.task('less', function () {
  const src = 'src/styles/index.less'
  const path = ['src/styles']
  const dist = 'dist/styles'

  return gulp.src(src)
    .pipe(less({ path }))
    .pipe(gulp.dest(dist))
})

gulp.task('watch', function () {
  gulp.watch('./**/*.less', gulp.series('less'))
})
