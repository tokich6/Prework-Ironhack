//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//Examples
//removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com'
//removeUrlAnchor('www.codewars.com?page=1') 
// returns 'www.codewars.com?page=1' 

function removeUrlAnchor(url){
    const anchor = '#';
    return newUrl = url.split(anchor)[0];
  }
  
  console.log(removeUrlAnchor('www.codewars.com?page=1'));
