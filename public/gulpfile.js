var
	gulp = require('gulp'),
	runSequence = require('run-sequence'),
	connect = require('gulp-connect'),
	jade = require('gulp-jade'),
	scss = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	coffee = require('gulp-coffee'),
	reload = connect.reload();
	gulp.task('connect', function() {
		connect.server ({
			port: 4000,
			livereload: true,
		});
	});
	// ==============
	// Variables
	// ==============
		// ==============
		// Developer
		// ==============
		var D = {
			layout: ['./templates/**/*.jade'],
			appLayout: ['./templates/index.jade'],
			styles: ['./scss/**/*'],
			appStyle: 'scss/app.scss',
			js: ['./js/**/*'],
			images: ['images/**/*'],
		};
		// ==============
		// Built
		// ==============
		var B = {
			html: './assets/',
			styles: 'assets/css/',
			js: 'assets/js/',
			images: 'assets/images/',
		};
	// ==============
	// Layout
	// ==============
	gulp.task('templates', function() {
		var YOUR_LOCALS = {};
		gulp.src(D.appLayout)
			.pipe(plumber())
			.pipe(jade({locals: YOUR_LOCALS,pretty: true}))
			.pipe(gulp.dest(B.html))
			.pipe(connect.reload());
	});
	gulp.task('pdftest', function(){
		gulp.src('layout/pdftest.html')
			.pipe(connect.reload());
	})
	// ==============
	// Scripts
	// ==============
	gulp.task('js', function() {
		gulp.src(D.js)
			.pipe(plumber())
			.pipe(gulp.dest(B.js))
			.pipe(connect.reload());
	});

	// ==============
	// Coffee
	// ==============
	gulp.task('coffee', function() {
		gulp.src('coffee/**/*.coffee')
			.pipe(plumber())
			.pipe(coffee({bare: true}))
			.pipe(gulp.dest('assets/js/'))
			.pipe(connect.reload());
	});


	gulp.task('scss', function () {
		return scss('scss/app.scss', {
			style: 'compressed',
			compass: true,
		})
			.pipe(plumber())
			.pipe(connect.reload())
			.pipe(gulp.dest(B.styles));
	});
	// ==============
	// Watch
	// ==============
	gulp.task('watch', function() {
		gulp.watch(D.layout, ['templates']);
		gulp.watch(D.js, ['js']);
		gulp.watch('coffee/**/*', ['coffee']);
		gulp.watch(D.styles, ['scss']);
		gulp.watch(D.images, reload);
	});
	gulp.task('default', function(cb) {
		runSequence(
			[
			'templates',
			'js',
			'coffee',
			'connect',
			'watch',
			],
			'scss',
			cb);
	});



