export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    build: number
    repaired: boolean
    address: AddressType
}

export type BuildingType = {
    type: "hospital" | "fireshow"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    buildings: Array<BuildingType>
    number: number
}