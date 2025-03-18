//interface for Person

export interface PersonInter {
    id: string,
    name: string,
    age: number
}

export type Persons = Array<PersonInter>