$(document).ready(function(){

  var str = '';

  // function countInstances(string, char) {
  //  var substrings = string.split(char);
  //  return substrings.length -1;
  // }

  function createDiv(char, num){
    var master = document.getElementById("masterDiv");
    var newDiv = document.createElement("div");
    newDiv.innerHTML = '<div id="Character-' + char + '" class=""><p>There are ' + num + ' instances of the character ' +  char.toUpperCase() + '</div>'
    master.prepend(newDiv);
  }

  function duplicateChecker(){
    var deduction = 0;
    for(i=0;i<str.length;i++){
      var count = str.match(new RegExp(str[i], "g")).length;
      // var count = countInstances(str, str[i]);
      if (count > 1){
        console.log("We have " + count + " duplicates of " + str[i]);
        deduction += factorializeNumber(count);
        createDiv(str[i], count);
      }else{
        console.log(str[i] + " has no duplicates");
      }
    }
    // console.log(deduction);
  }

  function factorializeNumber(num){

    var numTotal = 1;
    var length = num;
    var factor = num
    // for(i=0;i < length;i++){
    //   numTotal *= factor;
    //   factor--;
    // }
    return numTotal;
  }


  function factoralizeString(){
    var stringTotal = 1;
    var length = str.length;
    for(i=0;i<str.length;i++){
      stringTotal *= length;
      length--;
    }
    return stringTotal;
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
