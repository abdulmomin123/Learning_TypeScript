type Admin = {
  name: string;
  permissions: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

interface ElevatedEmployee extends Admin, Employee {}

type unknownEmp = Admin | Employee;

function printEmp(emp: unknownEmp) {
  if ('permissions' in emp) {
    console.log(emp.permissions);
  }
}

printEmp({ name: 'momin', permissions: ['admin'] });
