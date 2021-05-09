import {StudentType} from "../02/02";
import {BuildingType, HouseType} from "../02/0202";

export const addScill = (Student: StudentType, scill: string) => {
    Student.technologies.push({
        id: new Date().getTime(),
        title: scill
    })
}

export function makeStudentAktiv(student: StudentType) {
    student.isReact = true
}

export function placeStudent(student: StudentType, city: string) {
    return student.address.city.title === city
}

export function addMoney(building: BuildingType, budget: number) {
    building.budget += budget
}

export function repairHouse(houseType: HouseType) {
    houseType.repaired = true;
}

export function staff(building: BuildingType, staffCount: number) {
    building.staffCount -= staffCount
}

export function staff2(buildingType: BuildingType, number: number) {
    buildingType.staffCount += number
}