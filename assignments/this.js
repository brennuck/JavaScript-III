/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the window/console object
* 2. Implict Binding: whenever a function is called by a preceding dot, the object before the dot is this
* 3. New Binding: whenever a constuctor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: Whenever javascripts call of apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Brennon");
// Principle 2

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Brennon');
// Principle 3
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const brennon = new CordialPerson('josh');
  const josh = new CordialPerson('brennon');
  
  josh.speak();
  josh.speak();

// Principle 4
brennon.speak.call(josh); josh.speak.apply(brennon);
// code example for Explicit Binding