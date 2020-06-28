const dog = {
  name: "Scout",
  breed: ["Husky", "German Shepherd"],
  age: 4,
  happiness: 50,
  hunger: 10,
  energy: 100
};

dog["feed"] = function(food) {
  if (dog.hunger - food > 0) {
    dog.hunger -= food;
  } else {
    dog.hunger = 0;
  }
};

dog["play"] = function(time) {
  if (dog.happiness + time < 100) {
    dog.happiness += time;
  } else {
    dog.happiness = 100;
  }

  if (dog.energy - time > 0) {
    dog.energy -= time;
  } else {
    dog.energy = 0;
  }
};

dog["nap"] = function(time) {
  if (dog.energy + time < 100) {
    dog.energy += time;
  } else {
    dog.energy = 100;
  }
};
