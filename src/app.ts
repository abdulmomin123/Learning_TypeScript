interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if ('flyingSpeed' in animal) {
    console.log(animal.flyingSpeed);
  }
}

moveAnimal({ flyingSpeed: 33 });
