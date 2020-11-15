type Admin = {
  name: string;
  permissions: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const me: ElevatedEmployee = {
  name: 'momin',
  permissions: ['admin'],
  startDate: new Date(),
};

console.log(me);
