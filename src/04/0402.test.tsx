import {CityType} from '../02/0202';
import {demolishHouses, getBuildings} from "./0402";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'new york',
        houses: [
            {
                id: 1, build: 2012, repaired: false,
                address: {number: 100, street: {title: 'green road'}}
            },
            {
                id: 2, build: 2008, repaired: false,
                address: {number: 100, street: {title: 'red road'}}
            },
            {
                id: 3, build: 2020, repaired: false,
                address: {number: 100, street: {title: 'green road'}}
            }
        ],
        buildings: [
            {
                type: "hospital", budget: 20000,
                staffCount: 100, address: {street: {title: 'odo street'}}
            },
            {
                type: "fireshow", budget: 50000,
                staffCount: 1000, address: {street: {title: 'gangsta shit'}}
            }
        ],
        number: 100000
    }
})

test('test the best', () => {
     demolishHouses(city, 'green road');

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(2)
})

test('test the best2', () => {
    let building = getBuildings(city.buildings, 500);

    // expect(building.length).toBe(1)
    // expect(building[0].).toBe(2)
})