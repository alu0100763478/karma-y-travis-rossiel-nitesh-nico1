var assert = chai.assert;

suite('Temperatura', function() {

    test('32F = 0 Celsius', function() {
        var resultado = Medida.convertir("32f to c");
        assert.deepEqual(resultado,  '0');
    });
    
    test('32F = 273.15 Kelvin', function() {
        var resultado = Medida.convertir("32f to k");
        assert.deepEqual(resultado, '273.15');
    });
    
    test('0C = 273.15 Kelvin', function() {
        var resultado = Medida.convertir("0c to k");
        assert.deepEqual(resultado, '273.15');
    });
    
    test('45C = 113.0 Farenheit', function() {
        var resultado = Medida.convertir("45c to f");
        assert.deepEqual(resultado, '113');
    });
    
    test('273.15K = 0 Celsius', function() {
        var resultado = Medida.convertir("273.15k to c");
        assert.deepEqual(resultado, '0');
    });
    
    test('273.15K = 3 Farenheit', function() {
        var resultado = Medida.convertir("273.15k to f");
        assert.deepEqual(resultado, '3');
    });
});



suite('Medida', function() {
    
    test('Error- Desconozco conversion de tipos incompatibles', function() {
        var resultado = Medida.convertir("45f to m");
        assert.deepEqual(resultado, 'Desconozco como convertir desde "f" hasta "m"');
    });

});

suite('Distancia', function() {
    
    test('10 Metros = 393.7 Pulgadas', function() {
        var resultado = Medida.convertir("10m to p");
        assert.deepEqual(resultado, '393.7');
    });
    
        test('5 Pulgadas a metros', function() {
        var resultado = Medida.convertir("5p to m");
        assert.deepEqual(resultado, '0.12700025400050802');
    });

});

suite('Main', function() {
    
    test('Main', function() {
        var resultado = main();
        assert.deepEqual(resultado, false);
    });

});