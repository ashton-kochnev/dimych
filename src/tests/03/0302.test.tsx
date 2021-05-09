import {BuildingType, CityType} from "../02/0202";
import {addMoney, repairHouse, staff, staff2} from "./03";

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

test('test the best5', () => {
    addMoney(city.buildings[0], 20000)
    expect(city.buildings[0].budget).toBe(40000)
})

test('test the best6', () => {
    addMoney(city.buildings[1], -20000)
    expect(city.buildings[1].budget).toBe(30000)
})

test('test the best7', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('test the best8', () => {
    staff(city.buildings[0], 20)
    expect(city.buildings[0].staffCount).toBe(80)
})

test('test the best4', () => {
    staff2(city.buildings[0], 20)
    expect(city.buildings[0].staffCount).toBe(120)
})

