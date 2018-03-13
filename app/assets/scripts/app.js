var Person = require('./modules/person');

var john = new Person("John Doe", "blue");
var jane = new Person("Jane Smith", "green");

john.greet();
jane.greet();
