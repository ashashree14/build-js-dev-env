// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features which Mocha doesnot understand
require.extensions['.css'] = function () { }
