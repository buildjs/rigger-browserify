var path = require('path'),
    debug = require('debug')('rigger-browserify'),
    fs = require('fs'),
    browserify = require('browserify'),
    reTransform = /(\S+)\s+\[(.*)\]/;

exports = module.exports = function(rigger, target) {
    var scope = this,
        match = reTransform.exec(target),
        transforms = [],
        opts = {},
        b;

    if (match) {
        transforms = match[2].split(/\,\s/);
        target = match[1];
    }

    // initialise the bundle
    debug('initializing bundle: ' + target);
    b = browserify(path.resolve(rigger.csd, target));

    b.bundle(opts, function(err, content) {
        fs.writeFileSync(path.resolve(__dirname, 'test/output.js'), content);
        scope.done(err, content);
    });
};