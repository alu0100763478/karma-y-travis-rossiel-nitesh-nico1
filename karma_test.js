var assert = chai.assert;

suite('temperature', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['karma_test.html'];
          original = document.getElementById('convert');
          converted = document.getElementById('converted');
      }
    });

    test('32F = 0C', function() {
        original.value = "32F";
        convertir();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        convertir();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        convertir();
        assert.match(converted.innerHTML, /ERROR/);
    });
});