function accum(s) {
	const arr = s.toUpperCase().split('');
   let updatedArr = arr.map((element, index) => {
      let addition = element.toLowerCase();
       if(index > 0) {
       for(let i=1; i<=index; i++) {
            element +=addition;
         }
     }  
     return element;
  })
  
 return updatedStr = updatedArr.join('-');
}

console.log(accum('TttoNNika'));
