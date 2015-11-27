
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
			
			primegenerator[Symbol.iterator] = primegenerator.entries = PrimeIterator;
			
			function * PrimeIterator() {
			
				var allprimes = new List();
				var current = 3;
					
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
			
		}
		
	}
	
	out.PrimeGenerator = PrimeGenerator;
	
}

main(window);
