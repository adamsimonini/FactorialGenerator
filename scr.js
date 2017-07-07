$(document).ready(function(){

  var str = '';

  function duplicateChecker(){
    var duplicates = 0;
    for(i=0;i<str.length;i++){
      var split = str.split(new RegExp(str[i], "gi"));
      if (split.length > 1){
        console.log("We have duplicates!");
      }else{
        console.log("No duplicates, yet...");
      }
    }
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
    duplicateChecker();
    str = document.getElementById("str").value;
    console.log(str);
    if(str === ''){
      alert("Please input a string");
      return;
    }else{
      alert(factoralizeString());
    }
  });



});
