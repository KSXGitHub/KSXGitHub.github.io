
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  
  input.addEventListener('change', onchange, false);
  
  function onchange() {
    
    var n = parseInt(input.value);
    
    if (!isFinite(n)) {
      output.textContent = "Invalid input";
      return;
    }
    
    if (n < 2) {
      output.textContent = "No prime less than 2";
      return;
    }
    
    var out = [2];
    
    for (let prime of new PrimeGenerator()) {
      if (!n) {
        break;
      }
      out.push(prime);
      --n;
    }
    
    output.textContent = out.join(', ');
    
  }
  
})(document);
