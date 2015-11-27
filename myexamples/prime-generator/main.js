
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var gettxt = document.getElementById('gettxt');
  var primegen;
  
  input.addEventListener('change', onchange, false);
  
  refresh();
  
  function onchange() {
    
    var n = parseInt(input.value);
    
    if (!isFinite(n) || n < 1) {
      output.textContent = "Invalid input";
      output.classList.add('error');
      gettxt.classList.add('hidden');
      return;
    }
    
    output.classList.remove('error');
    gettxt.classList.remove('hidden');
    
    var out = [2];
    gettxt.download = String(n) + "primes.txt";
    
    for (let prime of primegen) {
      --n;
      if (!n) {
        break;
      }
      out.push(prime);
    }
    
    var outtext = out.join(', ');
    output.textContent = outtext;
    gettxt.href = URL.createObjectURL(new Blob([outtext]), {type: 'text/plain'});
    
  }
  
  function refresh() {
    primegen = new PrimeGenerator();
  }
  
})(document);
