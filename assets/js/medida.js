(function(exports) {
  "use strict";
  Medida.measures = Medida.measures || {};
  var auxiliar = XRegExp('^(\\s*) \n' +
                           '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) (\\s*) # val \n' +
                           '(?<tip> [a-z]) (\\s*) # tip \n' +
                           '((to))? (\\s*) \n' +
                           '(?<au> [a-z]) (\\s*)$ # au \n','x');
                           
  Medida.matching = function(valor) {
    var val = XRegExp.exec(valor, auxiliar);
    return val;
  };

  function Medida(valor, tipo)  
  {
    this.tipo = tipo || "No type";
    this.valor = valor;
  
    /*if (this.tipo == "No type"){
      var m = this.valor.split(" ");
      this.valor = m[0];
      this.tipo = m[1];
    }*/
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km)*/
  };

  Medida.convertir = function(valor) {
    
  
    var elemento  = document.getElementById('converted');
    var elemento2 = document.getElementById('convertido');
  
    var measures = Medida.measures;

    var valor = Medida.matching(valor);
    if (valor) {
      var numero = parseFloat(valor.val),
          tipo   = valor.tip,
          destino = valor.au;
          console.log(numero, tipo, destino);

      try {         
        var source = new measures[tipo](numero);  // new Fahrenheit(32)
        var target = "to"+measures[destino].name; // "toCelsius"
        elemento.innerHTML = source[target]().toFixed(2) + " "+target; // "0 Celsius"
      }
      catch(err) {
        elemento.innerHTML = "";
        elemento2.innerHTML = 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
      }
    }
    else {
      elemento.innerHTML = "";
      elemento2.innerHTML ="Introduzca una temperatura valida: 330e-1 F to C";
    }
      
  };    
  
  exports.Medida = Medida;
})(this);
