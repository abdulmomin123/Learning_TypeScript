interface Person {
  name: string;
  age: number;

  greet: () => void;
}

const me: Person = {
  name: 'momin',
  age: 18,

  greet() {
    console.log(`Hi I'm ${this.name} & I'm ${this.age} years old`);
  },
};

me.greet();
