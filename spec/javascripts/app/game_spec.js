require(['cool_game'], function(CoolGame) {


  describe('CoolGame', function() {
    describe('construction', function() {
      console.log('asdf')
      it('creates a new game', function() {
        expect(new CoolGame()).toEqual(37);
      });
    });
  });
});
