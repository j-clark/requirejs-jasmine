define(['testUtils'], function(testUtils) {
  describe('Calculator', function() {
    beforeEach(function(done) {
      var self = this;
      this.Adder = jasmine.createSpy('Adder');
      this.adder = jasmine.createSpyObj('adder', ['add']);
      this.Adder.and.returnValue(this.adder);

      testUtils.stub('adder', this.Adder);
      testUtils.loadWithCurrentStubs('calculator', function(Calculator) {
        self.calculator = new Calculator();
        done();
      });
    });

    afterEach(function() {
      testUtils.reset();
    });

    describe('.add', function() {
      it('delegates to the adder', function() {
        this.calculator.add(2, 3);
        expect(this.adder.add).toHaveBeenCalledWith(2, 3);
      });
    });
  });
});
