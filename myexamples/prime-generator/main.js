
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  
  input.addEventListener('change', onchange, false);
  
  function onchange() {
    
    var n = parseInt(input.value);
    
    if (!isFinite(n) || n < 1) {
      output.textContent = "Invalid input";
      return;
    }
    
    var out = [2];
    
    for (let prime of new PrimeGenerator()) {
      --n;
      if (!n) {
        break;
      }
      out.push(prime);
    }
    
    output.textContent = out.join(', ');
    
  }
  
})(document);
