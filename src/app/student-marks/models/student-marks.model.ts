export class StudentMark{
    constructor(
        public student: string,
        public studentClass:string,
        public studentSection:string,
        public math: number,
        public science:number,
        public english:number,
        public hindi:number,
    ){}

}

export function loadStudentMarks():StudentMark[]{
    let students:StudentMark[] = [];

    students[students.length] = {
        student: 'Himanshu',
        studentClass: '6th',
        studentSection: 'A',
        math: 60,
        science: 55,
        hindi:45,
        english:67
    };

    students[students.length] = {
        student: 'Jyoti',
        studentClass: '8th',
        studentSection: 'B',
        math: 76,
        science: 87,
        hindi:68,
        english:75
    };

    students[students.length] = {
        student: 'Govind',
        studentClass: '5th',
        studentSection: 'D',
        math: 39,
        science: 48,
        hindi:62,
        english:43
    };
    students[students.length] = {
        student: 'Nitin',
        studentClass: '10th',
        studentSection: 'B',
        math: 80,
        science: 71,
        hindi:64,
        english:76
    };

    students[students.length] = {
        student: 'Praveen',
        studentClass: '12th',
        studentSection: 'A',
        math: 63,
        science: 52,
        hindi:49,
        english:85
    };



    
    
    return students;
}