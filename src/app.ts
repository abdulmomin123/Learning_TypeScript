interface Student {
  school: string;
  currentClass: number;
  roll: number;
  ranking: string;
}

interface Teacher {
  name: string;
  education: string;
  age: number;
}

class ClassRoom {
  constructor(private students: Student[], private teacher: Teacher) {
    //
  }

  getStudents() {
    console.log(this.students);
  }

  getTeacher() {
    console.log(this.teacher);
  }
}

const classTwelve = new ClassRoom(
  [
    {
      school: 'Al-Hera',
      currentClass: 12,
      roll: 53,
      ranking: 'low',
    },
  ],
  { name: 'Usman Gani', education: 'Honors', age: 50 }
);
