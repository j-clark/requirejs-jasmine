define(function() {
  function Adder() {}

  Adder.prototype.add = function() {
    args = Array.prototype.slice.call(arguments)
    sum = 0;
    args.forEach(function(num) {
      if(typeof num === 'number') {
        sum += num;
      } else {
        sum = NaN;
      }

    });
    return sum;
  };

  return Adder;
});
