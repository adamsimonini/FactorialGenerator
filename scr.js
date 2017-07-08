$(document).ready(function(){
  var fullstring = '';
  var str = '';
  var master = document.getElementById("masterDiv");

  // function countInstances(string, char) {
  //  var substrings = string.split(char);
  //  return substrings.length -1;
  // }

  function createDiv(char, num){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = '<div id="Character-' + char + '" class=""><p>There are ' + num + ' instances of the character ' +  char.toUpperCase() + '</div>'
    master.prepend(newDiv);
  }

  function duplicateChecker(numTotal){
    for(i=0;i<str.length;i++){
      var count = str.match(new RegExp(str[i], "g")).length;
      if (count > 1){
        numTotal /= factorializeDuplicates(count);
        createDiv(str[i], count);
        str = str.replace(new RegExp(str[i], "gi"),'');
        i--;
      }else{
        console.log(str[i] + " has no duplicates");
      }
    }
    return numTotal;
  }

  function factorializeDuplicates(num){
    var duplicates = 1;
    for(ii=0;ii<num;ii++){
      duplicates *= num;
      num--;
    }
    return duplicates;
  }

  function factoralizeString(){
    var stringTotal = 1;
    var length = fullstring.length;
    for(i=0;i<fullstring.length;i++){
      stringTotal *= length;
      length--;
    }
    return stringTotal;
  }

  function clearDiv()
{
    $('#masterDiv').empty();
}

  $("#permuteBtn").on("click", function(){
    var conclusion = document.getElementById("conclusion");
    if(masterDiv.innerHTML !== null){
      clearDiv();
    }
    fullstring = document.getElementById("str").value;
    str = fullstring;
    if(fullstring === ''){
      alert("Please input a string");
      return;
    }
    var numTotal = factoralizeString();

    if(document.getElementById('subtractDuplicates').checked){
          conclusion.innerHTML = "The answer is " + duplicateChecker(numTotal);
    }else{
      // duplicateChecker(); just to show the dupicates in masterDiv
      conclusion.innerHTML = "The answer is " + (numTotal);
    }
  });
});
