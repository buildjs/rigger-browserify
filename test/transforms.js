var assert = require('assert'),
    riggerBrowserify = require('..'),
    rigger = require('./mocks/rigger'),
    path = require('path'),
    comparator = require('./helpers/comparator');

describe('transform resolution tests', function() {
    it('should be able to browserify using the stylify transform', function(done) {
        var scope = comparator(done, path.resolve(__dirname, 'output/require-styl.js'));

        riggerBrowserify.call(scope, rigger, 'src/require-styl [stylify]');
    });

    it('should be able to browserify using the stylify transform [nested]', function(done) {
        var scope = comparator(done, path.resolve(__dirname, 'output/require-styl-nested.js'));

        riggerBrowserify.call(scope, rigger, 'src/require-styl-nested [stylify]');
    });
});