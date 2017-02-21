var path = require('path'),
    debug = require('debug')('rigger-browserify'),
    fs = require('fs'),
    browserify = require('browserify'),
    reTransform = /(\S+)\s+\[(.*)\]/;

exports = module.exports = function(rigger, target) {
    const match = reTransform.exec(target);
    let transforms = [];

    if (match) {
        transforms = match[2].split(/\,\s/);
        target = match[1];
    }

    // initialise the bundle
    debug('initializing bundle: ' + target);
    const b = browserify(path.resolve(rigger.csd, target));

    // iterate through the specified transforms and transform
    transforms.forEach(transform => b.transform(require(transform)));
    b.bundle((err, content) => this.done(err, content));
};