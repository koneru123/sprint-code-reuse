/*Starting from scratch, create a Pet object using the prototypal or pseudoclassical class style
 Set default properties for a new Pet
 age to 1
 hunger to 10
 happiness to 100
 energy to 100
 Add the the ability to set the following properties when a new Pet is made
 name
 breed
 Add the following methods
 age -> increase age by 1 unit
 feed -> reduce hunger by number of units of food given*/

/*Advanced Content
 Add the following methods
 play -> accept unit of time and increase happiness by number of units of time until zero energy
 Age the pet once during play
 nap -> accept unit of time and increase energy by number of units of time until 100 energy
 Age the pet for every cycle of 100 units of time used by playing or napping.
 Create a traits property as an array of objects (initially empty)

  traits: [
            { eyeColor: "purple"},
            { hairLength: "long" },
            ... etc
          ]
 Create a method to add traits to a pet.

 Create the ability for your pet to create a child
 Have the pet inherit at least 1 trait from the parent.*/

//Pseudoclassical class style

var Pet = function(name, breed) {
  this.age = 1;
  this.hunger = 10;
  this.happiness = 100;
  this.energy = 100;
  this.name = name;
  this.breed = breed;
  this.traints = [];
  this.child = null;
  this.time = 0;
}

Pet.prototype.increaseAge = function() { this.age++; };
Pet.prototype.feed = function(food) { this.hunger - food; };
Pet.prototype.play = function(time) {
  if(this.energy > 0) {
    this.happiness += time;
  }
  this.increaseAge();
  if(time === 100) {
    this.increaseAge();
  }
};
Pet.prototype.nap = function(time) {
  if(this.energy < 100) {
    this.energy += time;
  }
  if(time === 100) {
    this.increaseAge();
  }
};
Pet.prototype.addTraits = function (traits) {
  this.traits = traits;
};
Pet.prototype.createChild = function (name, breed) {
  //debugger;
  this.child = Pet(name, breed);
  this.child.traits = this.traits;
 };

var dog = new Pet('snuufy', 'germansheperd');
dog.increaseAge();
dog.addTraits([
  { eyeColor: "purple"},
  { hairLength: "long" }
]);
dog.createChild('snuufyChild', 'germansheperd');
var cat = new Pet('kitty', 'meow', true);
console.log(JSON.stringify(dog));