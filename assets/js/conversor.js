(function(exports) {
  "use strict";
  
  function Medida(valor, tipo)  
  {
  this.valor = valor;
  this.tipo = tipo || "No type";
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }

  
  function Temperatura(valor, tipo)
  {
  Medida.call(this, valor, tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }

  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
  }
  
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFarenheit = function ()
  {
    var resultado = (this.valor * 9/5) + 32;
    resultado = resultado.toFixed(2) + " Farenheit";
    return resultado;
  }
    
  Celsius.prototype.toKelvin = function ()
  {
    var resultado = (this.valor * 1) + 273.15;
    resultado = resultado.toFixed(2) + " Kelvin";
    return resultado;
  }
  
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
  }
  
  Farenheit.prototype.toKelvin = function ()
  {
    var resultado = ((this.valor - 32) * 5/9) + 273.15;
    resultado  = resultado.toFixed(2)+" Kelvin";
    return resultado;
  }

  function Kelvin(valor)
  {
    Temperatura.call(this, valor);
  }
  
  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;
  
  Kelvin.prototype.toCelsius = function ()
  {
    var resultado = (this.valor - 273.15);
    resultado = resultado.toFixed(2) + " Celsius";
    return resultado;
  }
  
  Kelvin.prototype.toFarenheit = function ()
  {
    var resultado = ((this.valor - 273.15) * 9/5) + 3;
    resultado = resultado.toFixed(2) + " Farenheit";
    return resultado;
  }

  function Metros(valor)
  {
    Temperatura.call(this, valor);
  }
  
  Metros.prototype = new Temperatura();
  Metros.prototype.constructor = Metros;

  Metros.prototype.toPulgadas = function ()
  {
    var resultado = (this.valor * 39.37);
    resultado = resultado.toFixed(2) + " Pulgadas";
    return resultado;
  }

  function Pulgadas(valor)
  {
    Temperatura.call(this, valor);
  }
  
  Pulgadas.prototype = new Temperatura();
  Pulgadas.prototype.constructor = Pulgadas;
  
  Pulgadas.prototype.toMetros = function()
  {
    var resultado = (this.valor / 39.37);
    resultado = resultado.toFixed(2) + " Metros";
    return resultado;
  }
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
    var valor = document.getElementById('convert').value;
    var elemento  = document.getElementById('converted');
    
    var auxiliar = XRegExp('^(\\s*) \n' +
                          '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) (\\s*) # val \n' +
                          '(?<tip> [cCfFkKmMpP]) (\\s*) # tip \n' +
                          '(?<to> (to))? (\\s*) # to \n' +
                          '(?<au> [cCfFkKmMpP]) (\\s*)$ # au \n','x');
    
    valor = XRegExp.exec(valor, auxiliar);

    if (valor) {
      var numero = valor.val;
      var tipo = valor.tip.toLowerCase();
      var aux = valor.au.toLowerCase();
      numero = parseFloat(numero);

      console.log("Valor: " + numero + ", Tipo: " + tipo + ", To: " + aux);
      
      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          if (aux == 'f')
          {
            elemento.innerHTML = celsius.toFarenheit();
          }
          if (aux == 'k')
          {
            elemento.innerHTML = celsius.toKelvin();
          }
          break;
          
        case 'f':
          var farenheit = new Farenheit(numero);
          if (aux == 'c')
          {
            elemento.innerHTML = farenheit.toCelsius();
          }
          if (aux == 'k')
          {
            elemento.innerHTML = farenheit.toKelvin();
          }
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          if (aux == 'c')  
          {
            elemento.innerHTML = kelvin.toCelsius();
          }
          if (aux == 'f')  
          {
            elemento.innerHTML = kelvin.toFarenheit();
          }
          break;
        case 'm':
          var metros = new Metros(numero);
          if (aux == 'p')
          {
            elemento.innerHTML = metros.toPulgadas();
          }
          break;
        case 'p':
          var pulgadas = new Pulgadas(numero);
          if (aux == 'm')
          {
            elemento.innerHTML = pulgadas.toMetros();
          }
          break
        default:
          elemento.innerHTML = "¡¡¡ERROR!!!";
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "Introduzca un valor porfavor!";
  }
  
})(this);
