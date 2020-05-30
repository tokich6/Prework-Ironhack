function XO(str) {
    xArr = str.match(/x/gi) || [].length;
    oArr = str.match(/o/gi) || [].length;
      if(xArr.length === oArr.length) return true;
      else return false; 
  }
  
  console.log(XO('ooxXmb'));
