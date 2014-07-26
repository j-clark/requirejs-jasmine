define(['adder'], function(Adder) {
  function Calculator() {}

  Calculator.prototype.add = function() {
    var adder = new Adder();
    return adder.add.apply(adder, Array.prototype.slice.call(arguments));
  };

  return Calculator;
});
