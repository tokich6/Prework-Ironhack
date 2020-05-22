//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//Example:
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!

//==========Solution1========================
function createPhoneNumber(numbers){
    str=numbers.splice(0,3).join('').padStart(4,'(');
    str1= numbers.splice(0,3).join('');
    str2 = numbers.join('');
    return phoneNumber = str.concat(') ', str1, '-', str2);
  }
  
  //=========Solution2=======================
  
  function createPhoneNum(numbers) {
    let format = '(xxx) xxx-xxxx';
    numbers.forEach(number => {
      format = format.replace('x', number);
    });
    return format;
  }
  
  console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  //console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
