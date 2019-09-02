'use strict';

const job = 'developer';

const user = {};

user.firstName = 'Miguel';
user["lastName"] = 'de la Cruz';
user.age = 31;
user.job = job;
user.firstName = 'Laura';
user["lastName"] = 'Pareja';
user.age = 32;
user.job = job;

console.log(user);

// conclusión: se sobreescriben los valores de los objetos