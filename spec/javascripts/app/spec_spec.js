console.log('loading spec spec file')

define(['jquery', 'jasmine'], function($) {
  console.log('inside require call')

  describe('testing require', function() {
    console.log('running describe block')

    it('works', function() {
      console.log('running expectation')

      expect($).toEqual(7);
    });
  });
});
