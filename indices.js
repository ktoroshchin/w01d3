var countLetters = (str) => {
  var noSpace = str.replace(/\s+/g,"");
  var obj = {};
  for (var i = 0; i < noSpace.length; i++) {
    if(obj[noSpace[i]] == undefined){
      obj[noSpace[i]] = [i];
    }
    else
    obj[noSpace[i]].push(i)
    }
    return obj;
  }
console.log(countLetters("lighthouse in the house"))
