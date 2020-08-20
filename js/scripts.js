function crypto (x){
 let newStr =x.replace(/\s|\W/g,"");
  //x.replaceAll(/\w/,"");
  //console.log(x);
  let box = [];
  let columns = (Math.ceil(Math.sqrt(newStr.length)));
  for(let i = 0; i < newStr.length ; ){
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
function printCrypto(box){

  for(let i = 0; i < box.length; i++)
  {
    for(let j = 0; j < box[i].length; j++ ) {
      console.log(box[j][i]);
    }
  }
}
//printCrypto(crypto("don't compare yourself to others, compare yourself to the person you were yesterday"));