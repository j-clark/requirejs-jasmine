define(['require'], function(require) {
  var stubbed = [];
  return {
    stub: function(name, implementation) {
      stubbed.push(name);
      requirejs.undef(name);
      define(name, [], function() {
        return implementation;
      });
    },
    loadWithCurrentStubs: function(name, callback) {
      stubbed.push(name);
      requirejs.undef(name);
      require([name], callback);
    },
    reset: function() {
      stubbed.forEach(function(name) {
        requirejs.undef(name);
      });
      stubbed = [];
    }
  };
});
