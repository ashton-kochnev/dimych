import {CityType} from './0202';

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
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].build).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('green road')

    expect(city.houses[1].build).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('red road')

    expect(city.houses[2].build).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(100)
    expect(city.houses[2].address.street.title).toBe('yellow road')
})

test('test the best2', () => {
    expect(city.buildings.length).toBe(2)

    expect(city.buildings[0].type).toBe("hospital")
    expect(city.buildings[0].budget).toBe(20000)
    expect(city.buildings[0].staffCount).toBe(100)
    expect(city.buildings[0].address.street.title).toBe('odo street')

    expect(city.buildings[1].type).toBe("fireshow")
    expect(city.buildings[1].budget).toBe(50000)
    expect(city.buildings[1].staffCount).toBe(100)
    expect(city.buildings[1].address.street.title).toBe('gangsta shit')
})