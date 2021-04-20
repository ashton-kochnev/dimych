const ages = [12, 34, 55, 19, 78, 100, 90, 22]

const predicate = (age: number) => {
    return age > 90
}

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 150},
    {title: 'react', price: 210}
]

const cheapPredicat = (course: CourseType) => {
    return course.price < 160;
}