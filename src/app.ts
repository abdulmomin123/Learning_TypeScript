interface Human {
  gender: string;
  age: number;
}

interface Man extends Human {
  job: string;
}

const me: Man = {
  gender: 'male',
  age: 18,
  job: 'programmer',
};
