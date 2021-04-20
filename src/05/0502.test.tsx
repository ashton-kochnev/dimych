import {CityType} from '../02/0202';
import {createMessage, getStreets, getStreetsTitles} from "./0502";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'new york',
        houses: [
            {
                build: 2012, repaired: false,
                address: {number: 100, street: {title: 'green road'}}
            },
            {
                build: 2008, repaired: false,
                address: {number: 100, street: {title: 'red road'}}
            },
            {
                build: 2020, repaired: false,
                address: {number: 100, street: {title: 'yellow road'}}
            }
        ],
        buildings: [
            {
                type: "hospital", budget: 20000,
                staffCount: 100, address: {street: {title: 'odo street'}}
            },
            {
                type: "fireshow", budget: 50000,
                staffCount: 100, address: {street: {title: 'gangsta shit'}}
            }
        ],
        number: 100000
    }
})

test('test the best', () => {
    let streets = getStreets(city.buildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('odo street')
    expect(streets[1]).toBe('gangsta shit')
})

test('test the best2', () => {
    let streets = getStreetsTitles(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('green road')
    expect(streets[1]).toBe('red road')
    expect(streets[2]).toBe('yellow road')
})

test('test the best3', () => {
    let message = createMessage(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('hello guys from green road')
    expect(message[1]).toBe('hello guys from red road')
    expect(message[2]).toBe('hello guys from yellow road')
})