function Metros(valor)
  {
    Medida.call(this, valor,"m");
  }
  
  Metros.prototype = new Metros();
  Metros.prototype.constructor = Metros;
  Medida.measures.m = Metros;

  Metros.prototype.toPulgadas = function ()
  {
    var resultado = (this.valor * 39.37);
    return resultado;
  }; 
  
function Pulgadas(valor)
    {
        Medida.call(this, valor,"p");
    }
    Pulgadas.prototype = new Pulgadas();
    Pulgadas.prototype.constructor = Pulgadas;
    Medida.measures.p = Pulgadas;
  
    Pulgadas.prototype.toMetros = function()
    {
        var resultado = (this.valor / 39.37);
        return resultado;
    };  