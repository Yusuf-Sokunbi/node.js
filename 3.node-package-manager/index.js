const lodash = require('lodash');

const names = ['Alice', 'Bob', 'Charlie', 'David'];

const capitalize = lodash.map(names, name => lodash.capitalize(name));
const shuffledNames = lodash.shuffle(names);
const shuffledCapitalize = lodash.shuffle(capitalize);


console.log(capitalize); // Outputs: ['Alice', 'Bob', 'Charlie', 'David']
console.log(shuffledNames); // Outputs: Randomly shuffled names
console.log(shuffledCapitalize); // Outputs: Randomly shuffled capitalized names