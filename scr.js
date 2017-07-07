$(document).ready(function(){

  var str = '';

  function countInstances(string, char) {
   var substrings = string.split(char);
   return substrings.length -1;
  }

  function duplicateChecker(){
    var duplicates = 0;
    for(i=0;i<str.length;i++){
      var count = countInstances(str, str[i]);
      if (count > 1){
        duplicates += count;
        console.log("We have " + count + " duplicates of " + str[i]);
      }else{
        console.log("No duplicates, yet...");
      }
    }
    console.log(duplicates);
  }

  function factoralizeString(){
    var total = 1;
    length = str.length;
    for(i=0;i<str.length;i++){
      total *= length;
      length -= 1;
    }
    return total;
  }

  $("#permuteBtn").on("click", function(){
    str = document.getElementById("str").value;
    if(str === ''){
      alert("Please input a string");
    }else{
      duplicateChecker();
      alert(factoralizeString());
    }
  });



});
