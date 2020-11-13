// manual declaration
const person: {
  name: string;
  age: number;
  address: {
    area: string;
    homeNo: number;
  };
} = {
  name: 'momin',
  age: 18,
  address: {
    area: 'city',
    homeNo: 20,
  },
};

// type infersion
const person2 = {
  name: 'momin',
  age: 18,
};

console.log(person.age);
