document.addEventListener("DOMContentLoaded", function () {
  

  const form = document.getElementById("form");
  const resultDisplay = document.getElementById("result");



  form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const temperatureInput = parseFloat(document.getElementById("temp").value);
      const unit1Select = document.getElementById("unit1");
      const unit2Select = document.getElementById("unit2");

      

      const unit1 = unit1Select.value;
      const unit2 = unit2Select.value;

      let convertedTemperature;

      

      if (unit1 === "celcius" && unit2==="fahrenheit") {
          convertedTemperature = (temperatureInput * (9/5)) + 32;
      } else if (unit1 === "fahrenheit" && unit2==="celcius") {
          convertedTemperature = (temperatureInput - 32) * 5/9;
      }  else if (unit1 === "fahrenheit" && unit2==="fahrenheit") {
        convertedTemperature =temperatureInput;
      }  
     else if (unit1 === "celcius" && unit2==="celcius") {
      convertedTemperature =temperatureInput;
  }
      

    

      resultDisplay.value = convertedTemperature; /* `Converted temperature: ${convertedTemperature.toFixed(2)} ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;*/
      
    

  });
});




