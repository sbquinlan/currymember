Function.prototype.curry = function() {
  var args = Array.prototype.slice.call(arguments), self = this;
  return function() {
    return self.apply(
      self, 
      args.concat(Array.prototype.slice.call(arguments))
    );
  }
}