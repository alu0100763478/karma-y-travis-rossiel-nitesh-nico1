function Farenheit(valor)
  {
    Temperatura.call(this, valor); 
  }  
  
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  
  Farenheit.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 32) * 5/9;
    resultado = resultado.toFixed(2) + " Celsius";
    return resultado;
  };
  
  Farenheit.prototype.toKelvin = function ()
  {
    var resultado = ((this.valor - 32) * 5/9) + 273.15;
    resultado  = resultado.toFixed(2)+" Kelvin";
    return resultado;
  };