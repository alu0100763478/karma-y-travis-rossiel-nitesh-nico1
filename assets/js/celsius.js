(function (exports){
  "use strict";
  
  function Celsius(valor)
  {
    Temperatura.call(this, valor);
  }
  
  Celsius.prototype = new Celsius();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFarenheit = function ()
  {
    var resultado = (this.valor * 9/5) + 32;
    resultado = resultado.toFixed(2) + " Farenheit";
    return resultado;
  };
    
  Celsius.prototype.toKelvin = function ()
  {
    var resultado = (this.valor * 1) + 273.15;
    resultado = resultado.toFixed(2) + " Kelvin";
    return resultado;
  };
})(this);