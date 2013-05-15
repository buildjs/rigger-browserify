var assert = require('assert'),
    riggerBrowserify = require('..'),
    rigger = require('./mocks/rigger'),
    path = require('path'),
    comparator = require('./helpers/comparator');

describe('simple resolution tests', function() {
    it('should be able to browserify EventEmitter', function(done) {
        var scope = comparator(done, path.resolve(__dirname, 'output/require-emitter.js'));

        riggerBrowserify.call(scope, rigger, 'src/require-emitter');
    });

    it('should be able to browserify http', function(done) {
        var scope = comparator(done, path.resolve(__dirname, 'output/require-http.js'));

        riggerBrowserify.call(scope, rigger, 'src/require-http');
    });
});