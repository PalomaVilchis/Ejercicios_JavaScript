// se ejecuta en la RB
var Gpio = require(‘onoff’).Gpio; 
var led = new Gpio(17, ‘out’);     

var button = new Gpio(27, ‘in’, ‘rising’, {debounceTimeout: 10});
var estado = 0;

button.watch((err, value) => {
 if (err) {
   throw err;
 }
 estado = !estado;
 if(estado) { led.writeSync(1); }
 else {led.writeSync(0); }

});
