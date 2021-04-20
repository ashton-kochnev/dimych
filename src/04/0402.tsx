import {BuildingType, CityType} from "../02/0202";

export function demolishHouses(city: CityType, greenRoad: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== greenRoad)
}

export function getBuildings(buildings: Array<BuildingType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}