function calcBMI(){
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");
    var result = document.getElementById("result");
    var randomColor = getRandomColor();
    document.getElementById("result").style.color = 'white';
    document.getElementById("result").style.padding = '10px';
    document.getElementById("result").style.marginTop = '50px';
    document.getElementById("result").style.textAlign = 'center';
    document.getElementById("result").style.marginLeft = "450px";
    document.getElementById("result").style.fontSize = "20px";
    document.getElementById("result").style.width="30%";
    document.getElementById("result").style.backgroundColor = randomColor;
    var w = parseFloat(weight.value);
    var h = parseFloat(height.value);
    if( isNaN(h) || isNaN(w) ){
        result.innerHTML = "Please enter a valid input";
        return;
    }
    var bmi = w/((h/100)**2);
    var category = "";
    if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi < 25) {
        category = "Normal weight";
      } else if (bmi < 30) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
      result.innerHTML = " Your BMI is " + bmi.toFixed(2) + " (" + category + ") ";

}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}