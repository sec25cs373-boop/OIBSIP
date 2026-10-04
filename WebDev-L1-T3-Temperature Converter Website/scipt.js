const temperatureInput =
document.getElementById("temperature");

const unitSelect =
document.getElementById("unit");

const convertButton =
document.getElementById("convertButton");

const errorMessage =
document.getElementById("errorMessage");

const celsiusResult =
document.getElementById("celsiusResult");

const fahrenheitResult =
document.getElementById("fahrenheitResult");

const kelvinResult =
document.getElementById("kelvinResult");

convertButton.addEventListener("click", function () {

```
const inputValue =
    temperatureInput.value.trim();

const unit =
    unitSelect.value;


// Clear previous error

errorMessage.textContent = "";


// Check empty input

if (inputValue === "") {

    errorMessage.textContent =
        "Please enter a temperature.";

    return;
}


// Convert input to number

const temperature =
    Number(inputValue);


// Check valid number

if (!Number.isFinite(temperature)) {

    errorMessage.textContent =
        "Please enter a valid number.";

    return;
}


let celsius;


// Celsius

if (unit === "celsius") {

    celsius = temperature;

}


// Fahrenheit

else if (unit === "fahrenheit") {

    celsius =
        (temperature - 32) * 5 / 9;

}


// Kelvin

else if (unit === "kelvin") {

    celsius =
        temperature - 273.15;

}


// Absolute zero validation

if (celsius < -273.15) {

    errorMessage.textContent =
        "Temperature cannot be below absolute zero.";

    return;
}


// Celsius to Fahrenheit

const fahrenheit =
    (celsius * 9 / 5) + 32;


// Celsius to Kelvin

const kelvin =
    celsius + 273.15;


// Display Celsius

celsiusResult.textContent =
    celsius.toFixed(2) + " C";


// Display Fahrenheit

fahrenheitResult.textContent =
    fahrenheit.toFixed(2) + " F";


// Display Kelvin

kelvinResult.textContent =
    kelvin.toFixed(2) + " K";
```

});
