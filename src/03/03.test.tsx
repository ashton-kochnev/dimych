import {StudentType} from "../02/02";
import {addScill, makeStudentAktiv, placeStudent} from "./03";


let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'sergei',
        age: 30,
        isReact: false,
        address: {
            city: {
                title: 'minsk',
                country: 'belarus'
            },
            street: 'rozochka'
        },
        technologies: [
            {id: 1, title: 'html'},
            {id: 2, title: 'css'},
            {id: 3, title: 'js'},
        ]
    }
})

test('test the best3', () => {
    expect(student.technologies.length).toBe(3);

    addScill(student, 'react')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('react')
    expect(student.technologies[3].id).toBeDefined()
})

test('test the best4', () => {
    expect(student.isReact).toBe(false);

    makeStudentAktiv(student)

    expect(student.isReact).toBe(true);
})

test('test the best5', () => {
    let res1 = placeStudent(student, 'minsk')
    let res2 = placeStudent(student, 'moscow')

    expect(res1).toBe(true);
    expect(res2).toBe(false);
})