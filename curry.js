Function.prototype.curry = function() {
  var slice = Array.prototype.slice,
      args = slice.call(arguments);
  return function() {
    args.concat(slice.call(arguments));
    return this.apply(this, args);
  }
}