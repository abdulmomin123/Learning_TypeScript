interface Errors {
  id: string;
  [prop: string]: string;
}

const newErr: Errors = {
  id: '12',
  404: 'file not found',
  403: 'permission denied',
};

console.log(newErr);
