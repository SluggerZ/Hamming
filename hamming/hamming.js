// computes the Hamming distance from two strands of nucleotides: dna_1 and dna_2
exports.compute = function(dna_1,dna_2) {
	
	// check to see if strands are same length
	if (dna_1.length !== dna_2.length) {
		throw new Error('DNA strands must be of equal length.');
	}

	var diff = 0; 
		// declare output variable that defaults to 0
		// for each character in the strands if the character in strand 1
		// is NOT equal to character in strand 2 
	
	for(i = 0 ; i < dna_1.length ; i += 1) {
		if(dna_1.charAt(i) != dna_2.charAt(i))
			diff+= 1; // add 1 to the Hamming distance and "diff" could be "distance"
		} 
		// use [] to examine single character in string (replaces "charAt()")
		// could be if(dna_1[i] != dna_1[i])
			
			return diff; // return integer representing Hamming distance

};

