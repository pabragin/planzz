module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('default', ['recess:less', 'clean:angular', 'copy:angular', 'recess:angular', 'concat:angular', 'uglify:angular']);

    gtx.finalise();
};
