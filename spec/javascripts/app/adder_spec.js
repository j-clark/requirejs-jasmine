define(['adder'], function(Adder) {
  describe('Adder', function() {
    beforeEach(function() {
      this.adder = new Adder();
    });

    describe('.add', function() {
      it('returns the sum of 2 numbers passed in', function() {
        expect(this.adder.add(2, 2)).toEqual(4)
      });

      it('returns the sum of 3 numbers passed in', function() {
        expect(this.adder.add(2, 2, 3)).toEqual(7)
      });

      it('returns NaN if not all arguments are numbers', function() {
        var itIsNaN = isNaN(this.adder.add(2, 'burger'));
        expect(itIsNaN).toBe(true)

        itIsNaN = isNaN(this.adder.add(null));
        expect(itIsNaN).toBe(true)
      });
    });
  });
});
