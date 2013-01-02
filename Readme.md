# Currymember
Just like all the other curry modules except it modifies Function.prototype.

Adds a member function to Functions allowing currying in Javascript. Useful for passing state to event handlers.

## Implementation
```javascript
Function.prototype.curry = function() {
  var args = Array.prototype.slice.call(arguments), self = this;
  return function() {
    return self.apply(
      self, 
      args.concat(Array.prototype.slice.call(arguments))
    );
  }
}
```

## Example:
```javascript
var add = function (a, b) { 
  return a+b; 
};
var add_one = add.curry(1);
add_one(1).should.equal(2);
add_one(2).should.equal(3);
```