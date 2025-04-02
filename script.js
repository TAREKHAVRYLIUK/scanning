'use strict';

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  const myWife = new Person(prompt('Enter first name'), prompt('Enter Last name'), +prompt('Enter age'), prompt('Enter eye colour'));

alert(myWife.firstName + ' ' + myWife.lastName + ' ' + myWife.age + ' ' + myWife.eyeColor);

const test = document.getElementById('test');
test.textContent = myWife.firstName + ' ' + myWife.lastName + ' ' + myWife.age + ' ' + myWife.eyeColor;