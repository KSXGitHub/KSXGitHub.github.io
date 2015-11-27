
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var gettxt = document.getElementById('gettxt');
  var primegen = new PrimeGenerator();
  var out = [2];
  
  document.getElementById('addprime').addEventListener('click', add, false);
  document.getElementById('reset').addEventListener('reset', reset, false);
  
  reset();
  
  function add() {
    
    var n = parseInt(input.value);
    
    if (!isFinite(n) || n < 1) {
      output.textContent = "Invalid input";
      output.classList.add('error');
      gettxt.classList.add('hidden');
      return;
    }
    
    output.classList.remove('error');
    gettxt.classList.remove('hidden');
    
    gettxt.download = String(out.length) + "primes.txt";
    
    for (let prime of primegen) {
      if (!n) {
        break;
      }
      --n;
      out.push(prime);
    }
    
    var outtext = out.join(', ');
    output.textContent = outtext;
    gettxt.href = URL.createObjectURL(new Blob([outtext]), {type: 'text/plain'});
    
  }
  
  function reset() {
    primegen.reset();
    out.length = 1;
  }
  
})(document);
