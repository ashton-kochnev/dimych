type SityType = {
    title: string
    country: string
}

type AddressType = {
    city: SityType
    street: string
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isReact: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const Student: StudentType = {
    id: 1,
    name: 'sergei',
    age: 30,
    isReact: false,
    address: {
        city: {
            title: 'minsk',
            country: 'belarus'
        },
        street: 'rozochka'
    },
    technologies: [
        {id: 1, title: 'html'},
        {id: 2, title: 'css'},
        {id: 3, title: 'js'},
    ]
}