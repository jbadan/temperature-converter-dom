
  var solutionDiv = document.getElementById("solution");
  var fahrenheitRadioButton = document.getElementById("radioFaren");
  var celciusRadioButton = document.getElementById("radioCel");

document.getElementById("submit").onclick = function(){
  var temp = document.getElementById("numberEntered").value;
  switch(true){
    case fahrenheitRadioButton.checked === true:
      solutionDiv.textContent = ((parseFloat(temp)-32)/1.8).toFixed(2)+" °C";
      break;
    case celciusRadioButton.checked === true:
      solutionDiv.textContent = (parseFloat(temp)*1.8+32).toFixed(2)+" °F";
      break;
    }
  switch(true){
    case ((fahrenheitRadioButton.checked === true && temp <= 32)||(celciusRadioButton.checked === true && temp <= 0)):
      solutionDiv.style.background = "blue";
      var kitty =document.createElement("img");
        kitty.src="img/coldCat.jpg";
        kitty.style.margin = "50px";
        solutionDiv.appendChild(kitty);
      break;
    case ((fahrenheitRadioButton.checked === true && temp >= 85)||(celciusRadioButton.checked === true && temp >= 30)):
      solutionDiv.style.background = "red";
      var hotKitty =document.createElement("img");
        hotKitty.src="img/hotCat.jpg";
        hotKitty.style.margin = "50px";
        solutionDiv.appendChild(hotKitty);
      break;
    default:
      var happyKitty = document.createElement("img");
      happyKitty.src="img/happyCat.jpg";
      happyKitty.style.margin = "50px";
      solutionDiv.appendChild(happyKitty);
    }
  }

document.getElementById("reset").onclick = function(){
  solutionDiv.textContent = "";
  solutionDiv.style.background = "white";
}
