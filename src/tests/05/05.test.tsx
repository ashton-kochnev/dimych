import {dimaTransormator, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'andrei ivanov', age: 33},
        {name: 'sergei petrov', age: 25},
        {name: 'barmalei sidorov', age: 12}
    ]
})

test('test the best', () => {
    const message = dimaTransormator(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('hello andrei')
    expect(message[1]).toBe('hello sergei')
    expect(message[2]).toBe('hello barmalei')
})