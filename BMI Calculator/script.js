function calculateBMI() {
    // Get the input values
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");

    let inputHeight = parseFloat(heightInput.value);
    let inputWeight = parseFloat(weightInput.value);

    // Check if the input values are valid numbers
    if (isNaN(inputHeight) || isNaN(inputWeight) || inputHeight <= 0 || inputWeight <= 0) {
        alert("Invalid input. Please enter valid height and weight.");
        return;
    }

    // Calculate BMI (weight in kg / (height in meters * height in meters))
    let heightInMeters = inputHeight / 100; // Convert height to meters
    let bmi = inputWeight / (heightInMeters * heightInMeters);
    
    let message = "";
    if (bmi < 18.5) {
        message = "You are underweight.";
    } else if (bmi < 24.9) {
        message = "Your weight is normal.";
    } else if (bmi < 29.9) {
        message = "You are overweight.";
    } else {
        message = "You are obese.";
    }

    // Display the BMI result
    let resultElement = document.querySelector(".output");
    resultElement.textContent = "Your BMI is: " + bmi.toFixed(2) +" , "+ message; // Display BMI with two decimal places
}
function reset (){
    let x = document.getElementById("height");
    let y = document.getElementById("weight");

    x.value = "";
    y.value = "";

    let ans = document.querySelector(".output");
    ans.textContent = "";


}
