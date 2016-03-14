function Temperatura(valor, tipo) {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Temperatura();
Temperatura.prototype.constructor = Temperatura;

function Celsius(valor)
  {
    Temperatura.call(this, valor, "c");
  }
  
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;
  Medida.measures.c = Celsius;

  Celsius.prototype.toFarenheit = function ()
  {
    var resultado = (this.valor * 9/5) + 32;
    console.log(resultado);
    return resultado;
  };
    
  Celsius.prototype.toKelvin = function ()
  {
    var resultado = (this.valor * 1) + 273.15;
    return resultado;
  };
  
function Farenheit(valor)
  {
    Temperatura.call(this, valor, "f"); 
  }  
  
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  Medida.measures.f = Farenheit;
  
  Farenheit.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 32) * 5/9;
    return resultado;
  };
  
  Farenheit.prototype.toKelvin = function ()
  {
    var resultado = ((this.valor - 32) * 5/9) + 273.15;
    return resultado;
  };
  
  function Kelvin(valor)
  {
    Temperatura.call(this, valor,"k");
  }

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
  Medida.measures.k = Kelvin;

  Kelvin.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 273.15);
    return resultado;
  };

  Kelvin.prototype.toFarenheit = function ()
  {
    var resultado = ((this.valor - 273.15) * 9/5) + 3;
    return resultado;
  };

  