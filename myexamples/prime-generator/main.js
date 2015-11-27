
(function (document) {
  'use strict';
  
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var gettxt = document.getElementById('gettxt');
  
  input.addEventListener('change', onchange, false);
  
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
    
    for (let prime of new PrimeGenerator()) {
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
  
})(document);
