//Same keys and values

function createInstructors(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  /* Write an ES2015 Version */

  const createInstructor = (firstName, lastName) => {
    return {
    firstName,
    lastName
    }
  }

//   Computed Property Names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}


/* Write an ES2015 Version */

const computedPropertyName = (obj, num) => {
    return {
[num]:"That is my favorite!",
...obj
    } 
}

// Object Methods

var newInstructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  /* Write an ES2015 Version */

  const instructors = {
    firstname: "Colt",
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
  }

//   createAnimal function

//   Write a function which generates an animal object. The function should accepts 3 arguments:
  
//   - species: the species of animal (‘cat’, ‘dog’)
//   - verb: a string used to name a function (‘bark’, ‘bleet’)
//   - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
  
//   Use one or more of the object enhancements we’ve covered.

//   const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => { 
    return {
        species,
        [verb](){
            return noise;
        }
    }
}