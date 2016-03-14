(function(exports) {
  "use strict";

  function calcula(valor)
  {
    var auxiliar = XRegExp('^(\\s*) \n' +
                           '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) (\\s*) # val \n' +
                           '(?<tip> [a-z]) (\\s*) # tip \n' +
                           '((to))? (\\s*) \n' +
                           '(?<au> [a-z]) (\\s*)$ # au \n','x');

    var val = XRegExp.exec(valor, auxiliar);
    return val;
  };

  function Medida(valor, tipo)  
  {
    this.tipo = tipo || "No type";
    this.valor = valor;
    var prueba = valor;
    /*if (this.tipo == "No type"){
      var m = prueba.split(" ");
      this.valor = m[0];
      this.tipo = m[1];
    }*/
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km)*/
  };
  
  Medida.prototype.constructor = Medida;
  
  function Temperatura(valor, tipo)
  {
    Medida.call(this, valor, tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }

  Temperatura.prototype = new Medida();
  
  exports.Temperatura = Temperatura;
  
  Medida.prototype.convertir = function(valor) {

    var elemento  = document.getElementById('converted');
    var elemento2 = document.getElementById('convertido');

    var newvalor = calcula(valor);

    if (newvalor) {
      var numero = newvalor.val;
      var tipo = newvalor.tip;
      var aux = newvalor.au;
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
          var farenheit = new Farenheit(numero, tipo);
          if (aux == 'c')
          {
            elemento.innerHTML = farenheit.toCelsius();
            elemento2.innerHTML = "";
          }
          if (aux == 'k')
          {
            elemento.innerHTML = farenheit.toKelvin();
            elemento2.innerHTML = "";
          }
          break;
        case 'k':
          var kelvin = new Kelvin(numero, tipo);
          if (aux == 'c')  
          {
            elemento.innerHTML = kelvin.toCelsius();
            elemento2.innerHTML = "";
          }
          if (aux == 'f')  
          {
            elemento.innerHTML = kelvin.toFarenheit();
            elemento2.innerHTML = "";
          }
          break;
        case 'm':
          var metros = new Metros(numero);
          if (aux == 'p')
          {
            elemento.innerHTML = metros.toPulgadas();
            elemento2.innerHTML = "";
          }
          break;
        case 'p':
          var pulgadas = new Pulgadas(numero);
          if (aux == 'm')
          {
            elemento.innerHTML = pulgadas.toMetros();
            elemento2.innerHTML = "";
          }
          break
        default:
          elemento.innerHTML = "";
          elemento2.innerHTML = "¡¡¡ERROR!!!";
          /* rellene este código */
      }
    }
    else
    {
      elemento.innerHTML = "";
      elemento2.innerHTML = "Introduzca un valor por favor!";
    }
  };
  
  exports.Medida = Medida;
  
})(this);