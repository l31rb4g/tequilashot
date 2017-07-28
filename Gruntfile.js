module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: '*.scss',
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            files: ['src/scss/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
