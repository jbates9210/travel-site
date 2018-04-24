var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person'; //ES6

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' has paid taxes.')
  }
}

alert('testing 123');

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();
