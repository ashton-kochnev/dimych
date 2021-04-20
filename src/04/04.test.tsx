import {CourseType} from "./04";

test('test the best', () => {
    const ages = [12, 34, 55, 19, 78, 100, 90, 22]


    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('test the best2', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 150},
        {title: 'react', price: 210}
    ]

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('js')
});


test('test the best3', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'butter', isDone: true},
        {id: 3, title: 'milk', isDone: false},
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(1)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[0].title).toBe('butter')
});
