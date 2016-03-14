function Pulgadas(valor)
    {
        Medida.call(this, valor);
    }
    Pulgadas.prototype = new Pulgadas();
    Pulgadas.prototype.constructor = Pulgadas;
  
    Pulgadas.prototype.toMetros = function()
    {
        var resultado = (this.valor / 39.37);
        resultado = resultado.toFixed(2) + " Metros";
        return resultado;
    };