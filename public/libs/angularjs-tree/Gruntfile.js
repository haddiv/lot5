module.exports = function(grunt) {
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  uglify: {
			options: {
				banner: '/** \n'+
				'* <%= pkg.name %> - v<%= pkg.version %> \n' +
				'* (c) <%= grunt.template.today("yyyy-mm-dd") %>. <%= pkg.repository.url %> \n' +
				'* License: <%= pkg.license %> \n*/\n'
			},
			my_target: {
			  files: {
				'./dist/angularjs-tree.min.js': ['./src/angularjs-tree.js']
			  }
			}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify:my_target']);
}
