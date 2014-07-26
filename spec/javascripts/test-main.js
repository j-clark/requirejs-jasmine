require.config({
  baseUrl: '../../app',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'jasmine': '../bower_components/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html',
    'boot': '../bower_components/jasmine/lib/jasmine-core/boot/boot'
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
