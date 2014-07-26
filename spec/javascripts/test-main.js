require.config({
  baseUrl: '../../app',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'jasmine': '/__jasmine__/jasmine',
    'jasmine-html': '/__jasmine__/jasmine-html',
    'boot': '/__boot__/boot'
  },
  shim: {
    'jasmine': {
      exports: 'window.jasmineRequire'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'window.jasmineRequire'
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'window.jasmineRequire'
    }
  }
});

require(['boot'], function() {
  require(['../spec/javascripts/app/spec_spec'], function(spec) {
    console.log('howdy');
    window.executeTests();
  });
});
