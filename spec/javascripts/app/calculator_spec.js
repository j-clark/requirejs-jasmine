define(function() {
  describe('Calculator', function() {
    beforeEach(function(done) {
      var self = this;
      this.Adder = jasmine.createSpy('Adder');
      this.adder = jasmine.createSpyObj('adder', ['add']);
      this.Adder.and.returnValue(this.adder);

      require.undef('adder');
      define('adder', [], function() {
        return self.Adder;
      });

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
        expect(this.adder.add).toHaveBeenCalledWith(2, 3);
      });
    });
  });
});
