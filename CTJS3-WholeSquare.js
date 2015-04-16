// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B) {
// I need to set the inputs to a range
   var superrange =[];
   var answers =[];
   for (var x = A; x<=B; x++){
   	superrange.push(x);
   }
// I need to iterate through range, and only return numbers with squares contained in set
//a couple of nested for loops will get the job done, but I'm sure there's a more elegant way.
   for (var y=0; y<superrange.length; y++){
   		for (var x=0; x<superrange.length; x++){
   			if ((y*y) === superrange[x]){
   				answers.push(superrange[x]);
   			}
   		}
   	
   }
    return answers.length;
};



test = solution(2, 100);
console.log(test)
