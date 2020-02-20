//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//[10, 343445353, 3453445, 3453545353453] should return 3453455.

//=======Solution1===============================
function sumTwoSmallestNumbers(numbers) { 
    num1= Math.min(...numbers);
    indexToBeRemoved = numbers.indexOf(num1);
    numbers.splice(indexToBeRemoved,1);
    num2 = (Math.min(...numbers));
    return num1 + num2;
}

//=========Solution2=============================

function sumTwoSmallestNumbers2 (numbers) {
  arr = numbers.sort((a,b) => a - b);
  return arr[0] + arr[1];
}


console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers2([2,5,100,202]));