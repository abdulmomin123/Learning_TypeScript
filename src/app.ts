interface Student {
  school: string;
  currentClass: number;
  roll: number;
  ranking: string;
}

class ClassRoom {
  constructor(private students: Student[], private teacher: string) {
    //
  }

  getStudents() {
    console.log(this.students);
  }

  getTeacher() {
    console.log(this.teacher);
  }
}
