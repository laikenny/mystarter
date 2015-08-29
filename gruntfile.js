module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					base: '.',
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:<%= connect.server.options.port %>'
			}
		},

		watch: {
			all: {
				files: ['*.*'],
				options: { 
					livereload: true 
				}
			}
			
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', [
		'connect:server',
		'open:all',
		'watch:all'
	]);
};

