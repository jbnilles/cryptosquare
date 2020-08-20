function crypto (x){
 let newStr =x.replace(/\s|\W/g,"");
 let test = [[1,2,3,4],[5,6,7,8],[9,0]]                     //test    test[1][2]
  let box = [];                                             //0  [1,2,3,4]
  let columns = (parseInt(Math.sqrt(newStr.length)));    //let columns = (Math.ceil(Math.sqrt(newStr.length))) - 1;      //1   [5,6,7,8]
  for(let i = 0; i < newStr.length ; ){                     //2   [9,0]
    let tempArray = [];
    for(let j = 0; j < columns; i++, j++){
      if(i >= newStr.length)
      {
        break;
      }
      else {
        tempArray.push(newStr[i]);

      }
    }
    box.push(tempArray);
  }
  return box;
}
function printCrypto(box){ //not working yet
  let resultStr = '';
  for(let i = 0; i < box[0].length; i++)
  {
    for(let j = 0; j < box.length; j++ ) {
    	if(box[j][i] !== undefined) {
        if(resultStr.length % 6 === 0)
        {
          resultStr += ' ';
          resultStr += box[j][i];
        }
        else
        {
          resultStr += box[j][i];
        }
      }
    }
  }
  return resultStr;
}
//crypto("don't compare yourself to others, compare yourself to the person you were yesterday");
//printCrypto(crypto("don't compare yourself to others, compare yourself to the person you were yesterday"));