
function main(out) {
	'use strict';
	
	class PrimeGenerator {
		
		constructor(List, loop) {
			
			if (typeof List !== "function") {
				List = Set;
			}
			
			if (typeof loop !== "function") {
				loop = () => 1;
			}
			
			var primegenerator = this;
			var allprimes;
			var current;
			
			reset();
			
			primegenerator[Symbol.iterator] = primegenerator.entries = PrimeIterator;
			
			function * PrimeIterator() {
					
				// Loop: "Find Prime"
				for ( ; loop(current); current += 2) {
					
					let isprime = 1;
					
					// Loop: "Find Composite"
					for (let divisor of allprimes) {
						if (!(current % divisor)) {
							isprime = 0;
							break; // Escape "Find Composite", go to the rest of "Find Prime"
						}
					}
					
					if (isprime) {
						yield current;
						allprimes.add(current);
					}
				
				}
			
			}
			
			function reset() {
				allprimes = new List();
				current = 3;
			}
			
		}
		
	}
	
	out.PrimeGenerator = PrimeGenerator;
	
}

main(window);
