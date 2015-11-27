
# Prime Generator

## Idea of algorithm
 - Any number which is not divisible by any less prime number is a prime number
 - The only even prime number is 2, so, only check odd numbers

## Idea of program structure
 - ECMAScript 2015 provides `for...of` loop to iterate iterable object, `prime.js` provides class `PrimeGenerator`, which used to create an iterable object for primes

## Usage of `PrimeGenerator`

### Constructor
```javascript
  new PrimeGenerator(listclass, loopcondition);
```
 - Parameter `listclass` is a constructor/class which should create an iterable object, this object must have `.add(element)` method. If `listclass` was not be specified, use 'Set' by default.
 - Parameter `loopcondition` is a function. If `loopcondition` was not be specified, use `() => true` by default.
  ```javascript
    loopcondition(n);
  ```
  - Parameter `n`: current checking potential odd number.
  - Return value: if `false`, the iterating process will stop, `true` for otherwise.
 - Return value: an object of `PrimeGenerator`.
 
### Object usage
```javascript
  for (let prime of primegen) {
   statements;
  }
```
 - `primegen` is an object of class `PrimeGenerator`.
 - `prime` is a prime number (greater than 2).
 - `statements` is JavaScript statements.
