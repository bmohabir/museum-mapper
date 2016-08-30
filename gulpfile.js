var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cached = require('gulp-cached');
var csslint = require('gulp-csslint');
var csso = require('gulp-csso');
var del = require('del');
var eslint = require('gulp-eslint');
var filter = require('gulp-filter');
var htmlhint = require('gulp-htmlhint');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var lesshint = require('gulp-lesshint');
var mainBowerFiles = require('main-bower-files');
var rev = require('gulp-rev');
var revOutdated = require('gulp-rev-outdated');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');

function handleErr(err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task('bowerfiles', function() {
	const fonts = filter(['*.+(eot|otf|ttf|woff|woff2)'], {'restore': true, 'passthrough': false});
	const stream = gulp.src(mainBowerFiles())
		.pipe(cached('bower'))
		.pipe(fonts)
		.pipe(gulp.dest('src/fonts'));
	fonts.restore.pipe(gulp.dest('src/lib'));

	return stream;
});

gulp.task('browsersync', function() {
	browserSync.init({
		server: {
			'baseDir': 'src'
		}
	});
});

gulp.task('less', function() {
	return gulp.src('src/css/**/*.less')
		.pipe(cached('less'))
		.pipe(lesshint().on('error', handleErr))
		.pipe(lesshint.reporter())
		.pipe(less().on('error', handleErr))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return gulp.src('src/css/**/*.+(sass|scss)')
		.pipe(cached('sass'))
		.pipe(scsslint().on('error', handleErr))
		.pipe(sass().on('error', handleErr))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('csslint', ['less', 'sass'], function() {
	gulp.src('src/css/**/*.css')
		.pipe(cached('css'))
		.pipe(csslint().on('error', handleErr))
		.pipe(csslint.reporter())
		.pipe(browserSync.stream());
});

gulp.task('htmlhint', function() {
	gulp.src('src/**/*.html')
		.pipe(cached('html'))
		.pipe(htmlhint().on('error', handleErr))
		.pipe(htmlhint.reporter());
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.+(jpg|png|gif|jpeg|svg)')
		.pipe(cached('img'))
		.pipe(imagemin().on('error', handleErr))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('eslint', function() {
	gulp.src('src/js/**/*.js')
		.pipe(cached('js'))
		.pipe(eslint().on('error', handleErr))
		.pipe(eslint.format());
});

gulp.task('usemin', ['csslint', 'htmlhint', 'eslint'], function() {
	return gulp.src('src/**/*.html')
		.pipe(usemin({
			'css': [ autoprefixer({'browsers': ['last 2 versions'], 'cascade': false}).on('error', handleErr), csso().on('error', handleErr), rev() ],
			'html': [ htmlmin().on('error', handleErr) ],
			'js': [ uglify().on('error', handleErr), rev() ],
			'libjs': [ uglify().on('error', handleErr) ],
			'libcss': [ csso().on('error', handleErr) ]
		}).on('error', handleErr))
		.pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.+(eot|otf|ttf|woff|woff2|svg)')
		.pipe(cached('fonts'))
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', ['bowerfiles', 'fonts', 'imagemin', 'usemin', 'browsersync'], function() {
	gulp.watch('**/*.html', {'cwd': 'src'}, ['usemin']).on('change', browserSync.reload);
	gulp.watch('img/**/*.+(jpg|png|gif|jpeg|svg)', {'cwd': 'src'}, ['imagemin']);
	gulp.watch('css/**/*.+(css|sass|scss|less)', {'cwd': 'src'}, ['usemin']);
	gulp.watch('js/**/*.js', {'cwd': 'src'}, ['usemin']);
	gulp.watch('fonts/**/*.+(eot|otf|ttf|woff|woff2|svg', {'cwd': 'src'}, ['fonts']);
});

//gulp.task('cleanup', [''])
