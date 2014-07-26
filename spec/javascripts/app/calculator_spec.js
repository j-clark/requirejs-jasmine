define(function() {
  jasmine.createSpyClass = function(className, methods) {
    var constructor = jasmine.createSpy(className);
    var instance = jasmine.createSpyObj(className.toLowerCase(), methods);
    constructor.and.returnValue(instance);

    instance.constructor = constructor;
    return instance;
  };

  var mock = function(name) {
    return {
      using: function(spy) {
        require.undef(name);
        define(name, [], function() {
          return spy;
        });
      }
    };
  };

  describe('Calculator', function() {
    beforeEach(function(done) {
      var self = this;
      this.adder = jasmine.createSpyClass('Adder', ['add']);

      mock('adder').using(this.adder.constructor);

      require(['calculator'], function(Calculator) {
        self.calculator = new Calculator();
        done();
      });

    });

    afterEach(function() {
      require.undef('adder');
      require.undef('calculator');
    });

    describe('.add', function() {
      it('delegates to the adder', function() {
        this.calculator.add(2, 3);
        expect(this.adder.add).toHaveBeenCalledWith(2, 4);
      });
    });
  });
});
