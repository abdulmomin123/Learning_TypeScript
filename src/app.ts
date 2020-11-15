interface Pet {
  name: string;
  age: number;
  isBad: boolean;
}

class Pets implements Pet {
  constructor(public name: string, public age: number, public isBad: boolean) {
    //
  }
}

let myPets: Pet[];

myPets = [{ name: 'monty', age: 2, isBad: false }];
