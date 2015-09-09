var
	gulp = require('gulp'),
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
	// Notify
	notify = require("gulp-notify")
	// Server
	nodemon = require('gulp-nodemon');

	// Clean Up
	gulp.task('clean', function () {
		return gulp.src('public/assets/', {read: true})
			.pipe(clean());
	});

	// Server : Nodemon
	gulp.task('server', function () {
		nodemon ({
			script: './app.js',
			env: {
				'NODE_ENV': 'development'
			},
			ignore: ['public/']
		})
	});

	// Templates
	gulp.task('templates', function() {
		var YOUR_LOCALS = {};
		gulp.src('public/templates/index.jade')
			.pipe(plumber())
			.pipe(jade({locals: YOUR_LOCALS,pretty: true}))
			.pipe(gulp.dest('public/assets/'))
	});

	// Coffee
	gulp.task('coffee', function() {
		gulp.src('public/coffee/**/*.coffee')
			.pipe(plumber())
			.pipe(coffee({bare: true}))
			.pipe(gulp.dest('public/assets/javascripts/'))
	});

	// JS Vendors
	gulp.task('jsvendor', function(){
		return gulp.src(
				[
					'public/vendor/jquery/dist/jquery.min.js',
					'public/vendor/underscore/underscore-min.js',
					'public/vendor/backbone/backbone-min.js',
					'public/vendor/marionette/lib/backbone.marionette.min.js'
				]
			)
			.pipe(concat('js.vendor.js'))
			.pipe(rename('js.vendor.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('public/assets/javascripts/vendor/'))
			.pipe(notify('gulp is ready'));
	});

	// Stylesheets
	gulp.task('scss', function () {
		return scss('public/scss/app.scss', {
			style: 'compressed',
		})
			.pipe(plumber())
			.pipe(rename('app.min.css'))
			.pipe(gulp.dest('public/assets/stylesheets/'));
	});

	// Watch
	gulp.task('watch', function() {
		gulp.watch('public/templates/**/*.jade', ['templates']);
		gulp.watch('public/coffee/**/*.coffee', ['coffee']);
		gulp.watch('public/scss/**/*.scss', ['scss']);
		gulp.watch('public/vendor/**/*', ['jsvendor']);
	});

	// Default Task
	gulp.task('default', ['clean'], function(){
		gulp.start(['server','templates', 'jsvendor','coffee', 'scss', 'watch']);
	});



