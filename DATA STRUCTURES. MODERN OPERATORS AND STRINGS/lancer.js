'use strict';

// DESTRUCTURING ARRAYS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// Retrieving elements normally
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring the array
const [x,y,z] = arr; 
console.log(x,y,z);
console.log(arr);

