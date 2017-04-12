var names = ['Henrique', 'Lola', 'Heloisa'];

names.forEach(function (name) {
  console.log('forEach', name);
});
// forEach Henrique
// forEach Lola
// forEach Heloisa

names.forEach((name) => {
  console.log('arrowFunc', name);
});
// arrowFunc Henrique
// arrowFunc Lola
// arrowFunc Heloisa

names.forEach((name) => console.log(name));
// Henrique
// Lola
// Heloisa

var returnMe = (name) => name + '!';
console.log(returnMe('Henrique'));
// Henrique!

var person = {
  name: 'Henrique',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();
// Henrique says hi to Henrique
// Henrique says hi to Lola
// Henrique says hi to Heloisa

// Challenge Area
function add (a, b) {
  return a + b;
}
console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(7, 4));
console.log(addStatement(10, 8));

var addExpression = (a, b) => a + b;
console.log(addExpression(22, 3));
console.log(addExpression(9, -55));
