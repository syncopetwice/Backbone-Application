var
	gulp = require('gulp'),
	gulpsync = require('gulp-sync')(gulp),
	jade = require('gulp-jade'),
	scss = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	// JS
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	coffee = require('gulp-coffee'),
	// Clean
	clean = require('gulp-clean'),
	// Server
	connect = require('gulp-connect');

	// Start the server
	gulp.task('connect', function() {
		connect.server ({
			port: 3001,
			livereload: true,
		});
	});

	// Clean Up
	gulp.task('clean', function () {
		return gulp.src('assets/', {read: true})
			.pipe(clean());
	});

	// Templates
	gulp.task('templates', function() {
		var YOUR_LOCALS = {};
		gulp.src('templates/index.jade')
			.pipe(plumber())
			.pipe(jade({locals: YOUR_LOCALS,pretty: true}))
			.pipe(gulp.dest('assets/'))
			.pipe(connect.reload())
			;
	});

	// Coffee
	gulp.task('coffee', function() {
		gulp.src('coffee/**/*.coffee')
			.pipe(plumber())
			.pipe(coffee({bare: true}))
			.pipe(gulp.dest('assets/javascripts/'))
			.pipe(connect.reload())
			;
	});

	// JS Vendors
	gulp.task('jsvendor', function(){
		return gulp.src(
				[
					'vendor/jquery/dist/jquery.min.js',
					'vendor/underscore/underscore-min.js',
					'vendor/backbone/backbone-min.js',
					'vendor/marionette/lib/backbone.marionette.min.js'
				]
			)
			.pipe(concat('js.vendor.js'))
			.pipe(rename('js.vendor.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('assets/javascripts/vendor/'))
			.pipe(connect.reload())
			;
	});

	// Stylesheets
	gulp.task('scss', function () {
		return scss('scss/app.scss', {
			style: 'compressed',
		})
			.pipe(plumber())
			.pipe(rename('app.min.css'))
			.pipe(gulp.dest('assets/stylesheets/'))
			.pipe(connect.reload())
			;
	});

	// Watch
	gulp.task('watch', function() {
		gulp.watch('templates/**/*', ['templates']);
		gulp.watch('coffee/**/*', ['coffee']);
		gulp.watch('scss/**/*', ['scss']);
		gulp.watch('vendor/**/*', ['jsvendor']);
	});

	// Default Task
	gulp.task('default',
		gulpsync.sync([
				'clean',
				[
					'connect',
					'jsvendor',
					'templates',
					'coffee',
					'scss',
					'watch'
				]
			])
	 );