const convertToCelsius = function(fhTemp) {
  let celTemp = (fhTemp - 32) * (5/9);
  celTemp = Math.round(celTemp * 10)/10;
  return celTemp;
};

const convertToFahrenheit = function(celTemp) {
  let fhTemp = (celTemp * (9/5)) + 32;
  fhTemp = Math.round(fhTemp *10)/10;
  return fhTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
