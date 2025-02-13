document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("main-input");
    const resultField = document.getElementById("main-result");
    const caraKonversiField = document.getElementById("cara-konversi");
    const convertBtn = document.getElementById("convert-btn");
    const resetBtn = document.getElementById("reset-btn");
    const reverseBtn = document.getElementById("reverse-btn");

    let isCelsiusToFahrenheit = true;

    convertBtn.addEventListener("click", function () {
        let inputValue = parseFloat(inputField.value);

        if (isNaN(inputValue)) {
            alert("Masukkan angka yang valid!");
            return;
        }

        let result;
        if (isCelsiusToFahrenheit) {
            result = (inputValue * 9/5) + 32;
            caraKonversiField.value = `(${inputValue} × 9/5) + 32 = ${result.toFixed(2)}°F`;
        } else {
            result = (inputValue - 32) * 5/9;
            caraKonversiField.value = `(${inputValue} - 32) × 5/9 = ${result.toFixed(2)}°C`;
        }

        resultField.value = result.toFixed(2);
    });

    resetBtn.addEventListener("click", function () {
        inputField.value = "";
        resultField.value = "";
        caraKonversiField.value = "";
    });

    reverseBtn.addEventListener("click", function () {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        document.querySelector("label[for='main-input']").textContent = isCelsiusToFahrenheit ? "Celcius:" : "Fahrenheit:";
        document.querySelector("label[for='main-result']").textContent = isCelsiusToFahrenheit ? "Fahrenheit:" : "Celcius:";
        inputField.value = "";
        resultField.value = "";
        caraKonversiField.value = "";
    });
});