"use strict";
class ClassRoom {
    constructor(students, teacher) {
        this.students = students;
        this.teacher = teacher;
    }
    getStudents() {
        console.log(this.students);
    }
    getTeacher() {
        console.log(this.teacher);
    }
}
const classTwelve = new ClassRoom([
    {
        school: 'Al-Hera',
        currentClass: 12,
        roll: 53,
        ranking: 'low',
    },
], { name: 'Usman Gani', education: 'Honors', age: 50 });
//# sourceMappingURL=app.js.map