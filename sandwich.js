"use strict";
// 1.
// Declare a function named countDown
// Parameter(s): n/a
// Functionality: uses a loop to log, one by one, the numbers 5, 4, 3, 2, and 1
// var cc = 20;
const countDown = () => {
  // for loop when we have a defined start/end
  for (let i = 5; i >= 1; i -= 1) {
    console.log(i);
  }
};
countDown();

// 2
// Declare a function named countUp
// Parameter(s):  start, end
// Functionality: uses a loop to log, one by one, the numbers from start through end, including both start and end.
const countUp = () => {
  // for loop when we have a defined start/end
  for (let i = 1; i <= 10; i += 1) {
    console.log(i);
  }
};
countUp();

// 3.
// Declare a function named isLong
// Parameter(s):  word
// Functionality: returns true if word is longer than 10 characters and false otherwise.
const isLong = (word) => {
  if (word.length > 10) {
    return true;
  } else {
    return false;
  }
};
// --------TEST---------
// console.log(isLong("short"));
// ---------------------

// 4.
// Declare a function named whatWaterState
// Parameter(s):  temperature
// Functionality: logs “solid” if temperature is 32 or less, “liquid” if temperature is above 32 and below 212, and “gas”
// if temperature is 212 or above. (Pay careful attention to < vs <= and > vs >= !)
const whatWaterState = (temperature) => {
  if (temperature <= 32) {
    console.log("solid");
  } else if (temperature < 212) {
    console.log("liquid");
  } else {
    console.log("gas");
  }
};
whatWaterState(212);

// 5.
// Declare a variable named sandwiches that is initialized to an array with the following objects:
const sandwiches = [
  { type: "italian", calories: "1000", cost: "7.69", isVegetarian: false },
  { type: "veggie", calories: "500", cost: "5.50", isVegetarian: true },
  { type: "meatball", calories: "900", cost: "8.25", isVegetarian: false },
  { type: "jackfruit", calories: "650", cost: "8.50", isVegetarian: true },
];

// 6.
// [2 points] Declare a function named makeSandwich
// Parameter(s): sandwichArray, type, calories, cost, isVegetarian
// Functionality: construct an object and add it to the end of the provided array. Use the parameters for the values.
// The object should have the same properties as the objects already in the array.
const makeSandwich = (
  sandwichArray,
  newType,
  newCalories,
  newCost,
  newIsVegetarian
) => {
  const newSandwich = {
    type: newType,
    calories: newCalories,
    cost: newCost,
    isVegetarian: newIsVegetarian,
  };
  sandwichArray.push(newSandwich);
};
makeSandwich(sandwiches, "spicy italian", "1250", "12.20", false);
console.log(sandwiches);
// 7.
// [2 points] Declare a function named findVegetarianSandwich
// Parameter(s): sandwichArray
// Functionality: return the first object in sandwichArray that is vegetarian.
const findVegetarianSandwich = (sandwichArray) => {
  return sandwichArray.find((sandwich) => {
    return sandwich.isVegetarian === true;
  });
};
console.log(findVegetarianSandwich(sandwiches));

// 8.
// Declare a function named findCheapestSandwich
// Parameter(s): sandwichArray
// Functionality: return the object that has the lowest cost

function findCheapestSandwich(arrayOfSandwiches) {
  return Math.min(...arrayOfSandwiches.map((item) => item.price));
}
console.log(findCheapestSandwich(sandwiches));
