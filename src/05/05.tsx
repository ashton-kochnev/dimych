export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'andrei ivanov', age: 33},
    {name: 'sergei petrov', age: 25},
    {name: 'barmalei sidorov', age: 12}
]

export const dimaTransormator = (people: Array<ManType>) => {
    return people.map(man => `hello ${man.name.split(' ')[0]}`)
}

