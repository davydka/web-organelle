var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');

function handleErrors() {
	var args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('sass', function() {
	gulp.src('./styles/src/*.{scss,sass}')
		// Initializes sourcemaps
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true
		}))
		// Writes sourcemaps into the CSS file
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch('./styles/src/*.{scss,sass}', ['sass'])
});

gulp.task('serve', function() {
	gulp.src('')
		.pipe(server({
			//directoryListing: true,
			livereload: {
				enabled: true,
				filter: function(filePath, cb) {
					if(/js\/app.js/.test(filePath)) {
						cb(true)
					} else if(/styles\/main.css/.test(filePath)){
						cb(true)
					} else if(/index.html/.test(filePath)){
						cb(true)
					}
				}
			},
			defaultFile: 'index.html',
			open: true
		}));
});

var bundler = watchify(browserify({
	entries: ['./js/src/app.jsx'],
	transform: [reactify],
	extensions: ['.jsx'],
	debug: true,
	cache: {},
	packageCache: {},
	fullPaths: true
}));

function bundle() {
	return bundler
		.bundle()
		.on('error', notify)
		.pipe(source('js/app.js'))
		.pipe(gulp.dest('./'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
	bundle()
});

gulp.task('default', ['build', 'sass', 'watch', 'serve']);