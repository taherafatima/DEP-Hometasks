// Karma configuration
// Generated on Thu Apr 15 2021 11:30:25 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "./src/api.js",
      "./src/numformatter.js",
      "./src/viewcount.js",
      "./src/resultsdisplay.js",
      "./src/pagination.js",
      "./testing/api.spec.js",
      "./testing/numformatter.spec.js",
      "./testing/viewcount.spec.js",
      "./testing/resultsdisplay.spec.js",
      "./testing/pagination.spec.js",
      "index.html"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./src/api.js" : ['coverage'],
      "./src/numformatter.js" : ['coverage'],
      "./src/viewcount.js" : ['coverage'],
      "./src/resultsdisplay.js" : ['coverage'],
      "./src/pagination.js" : ['coverage'],
      'index.html': ['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

    
  })
}
