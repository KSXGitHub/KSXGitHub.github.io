
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var gettxt = document.getElementById('gettxt');
  var primegen = new PrimeGenerator();
  var out = [2];
  
  input.addEventListener('keydown', event => event.keyCode === 13 && add(), false);
  document.getElementById('addprime').addEventListener('click', add, false);
  document.getElementById('reset').addEventListener('click', reset, false);
  
  reset();
  
  function add() {
    
    var n = parseInt(input.value);
    
    if (!isFinite(n) || out.length + n < 1) {
      output.textContent = "Invalid input";
      output.classList.add('error');
      gettxt.classList.add('hidden');
      return;
    }
    
    output.classList.remove('error');
    gettxt.classList.remove('hidden');
    
    if (n < 0) {
      
      out.length += n;
      
    } else {
      
      for (let prime of primegen) {
        if (!n) {
          break;
        }
        --n;
        out.push(prime);
      }
      
    }
    
    var outtext = out.join(', ');
    output.textContent = outtext;
    gettxt.download = String(out.length) + "primes.txt";
    gettxt.href = URL.createObjectURL(new Blob([outtext]), {type: 'text/plain'});
    
  }
  
  function reset() {
    primegen.reset();
    out.length = 1;
    output.textContent = '2';
    gettxt.classList.add('hidden');
  }
  
})(document);
