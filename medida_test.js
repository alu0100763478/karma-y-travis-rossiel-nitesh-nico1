var expect = chai.expect;

describe("Medida", function(){
  describe("Constructor", function(){
    var e = new Medida(5,"c");
    it("Debería tener un tipo", function(){
      expect(e.tipo).to.equal("c");
    });
    
    it("Debería tener un valor", function(){
      expect(e.valor).to.equal(5);
    });
  });
});

describe("Temperatura",function(){
  describe("Constructor", function(){
    var e = new Temperatura(32, "f");
    it("Debería tener un tipo", function(){
      expect(e.tipo).to.equal("f");
    });
    
    it("Debería tener un valor", function(){
      expect(e.valor).to.equal(32);
    });
  });
});

describe("Celsius",function(){
  describe("Constructor", function(){
    var cel = new Celsius(32);
    it("Debería tener un valor", function(){
      expect(cel.valor).to.equal(32);
    });
    
    it("Debe existir un metodo 'toFarenheit()'", function(){
      expect(cel.toFarenheit()).to.equal(89.60);
    });
    
  /* it("Probando", function(){
      expect(cel.resultado.to.equal(89.60);
    });
*/    
    it ("Debe existir un metodo 'toKelvin()'", function (){
     expect(cel.toKelvin()).to.equal(305.15);
    });
  });
});

describe("Farenheit",function(){
  describe("Constructor", function(){
    var far = new Farenheit(32);
    
    it("Debería tener un valor", function(){
      expect(far.valor).to.equal(32);
    });
    
    it("Debe existir un metodo 'toKelvin()'", function(){
      expect(far.toKelvin()).to.equal(273.15);
    });
    
    it ("Debe existir un metodo 'toCelsius()'", function (){
     expect(far.toCelsius()).to.equal(0);
    });
  });
});

describe("Kelvin",function(){
  describe("Constructor", function(){
    var kelv = new Kelvin(5);
    
    it("Debería tener un valor", function(){
      expect(kelv.valor).to.equal(5);
    });
    
    it("Debe existir un metodo 'toFarenheit()'", function(){
      expect(kelv.toFarenheit()).to.equal(-479.66999999999996);
    });
    
    it ("Debe existir un metodo 'toCelsius()'", function (){
     expect(kelv.toCelsius()).to.equal(-268.15);
    });
  });
});

describe("Metros",function(){
  describe("Constructor", function(){
    var metros = new Metros(5);
    
    it("Debería tener un valor", function(){
      expect(metros.valor).to.equal(5);
    });
    
    it("Debe existir un metodo 'toPulgadas()'", function(){
      expect(metros.toPulgadas()).to.equal(196.85);
    });
  });
});

describe("Pulgadas",function(){
  describe("Constructor", function(){
    var pul = new Pulgadas(5);
    
    it("Debería tener un valor", function(){
      expect(pul.valor).to.equal(5);
    });
    
    it("Debe existir un metodo 'toMetros()'", function(){
      expect(pul.toMetros()).to.equal(0.12700025400050802);
    });
  });
});

