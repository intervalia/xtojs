module.exports = function (config) {
  config.set({
    autoWatch : true,
    basePath : '',
    browsers : ['PhantomJS'],
    coverageReporter: {
      type : 'html',
      dir : '../coverage/'
    },
    files: [
      '../src/**/*.js',
      './spec/**/*-spec.js'
    ],
    frameworks: ['jasmine'],
    plugins : [
      'karma-spec-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    preprocessors: {
      '../src/**/*.js': ['coverage']
    },
    reporters : ['spec','coverage']
  });
};
