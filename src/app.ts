interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('animal running at ' + speed);
}

moveAnimal({ type: 'horse', runningSpeed: 33 });
