var countLetters = (str) => {
  var noSpace = str.replace(/\s+/g,"");
  var obj = {};
  for (var i = 0; i < noSpace.length; i++) {
    if(obj[noSpace[i]] == undefined){
      obj[noSpace[i]] = 1
    }
    else
    obj[noSpace[i]] += 1
  }
  console.log(obj);
  console.log(noSpace);
}
countLetters("lighthouse in the house")
