import {BuildingType, HouseType} from "../02/0202";

export const getStreets = (buildings: Array<BuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitles = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export function createMessage(houses: Array<HouseType>) {
    return houses.map(b => `hello guys from ${b.address.street.title}`)
}