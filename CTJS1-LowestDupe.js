//for 2 given arrays, return the value that occurs in both arrays

// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B) {
    var dupearray =[];
    //what i plan to do is push the duplicates into an array, and then return the lowest one, using a single-pass bubble sort.
    //if the index of the new array is undefined, meaning there were not duplicates, the program will just return -1.
    //Here is where I populate the array of all dupes.
    for (var i=0; i<A.length; i++) {
    	for (var k=i+1; k<B.length; k++) {
    		if (B[k] === A[i]){
    			dupearray.push(B[k]);
    		}
    	}
    	//before I look for the lowest value I determine f any values actually got pushed into the new array.  If that array is empty, then it's game over.
    };  var winnah = [''];
    	if (dupearray[0] === undefined){
    		winnah = -1;
    		return winnah;
    	};
    	//Game on!  We iterate through the array, and any time I find a lower number, we'll store it away for later.
    	winnah = dupearray[0];
    	for (var m =0; m<dupearray.length; m++){
    		if (winnah>dupearray[m+1]){
    			winnah=dupearray[m+1];
    		}
   		}; return winnah
}

//whambonie.
var result = solution([1,1,34,85], [28,5,689,7]);
console.log(result)