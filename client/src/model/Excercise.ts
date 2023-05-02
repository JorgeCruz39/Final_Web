import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";


export interface Excercise {
    id: number;
    exercise: string;
    description: string;
    bodyPart: string;
}

export function getExcercises(): Promise<DataListEnvelope<Excercise>> {

    return api('excercise')

}

export function getExcercise(id: number): Promise<DataEnvelope<Excercise>> {

    return api(`excercise/${id}`)

}

export function createExcercise(excercise: Excercise): Promise<DataEnvelope<Excercise>> {
        return api('excercise', excercise)
}

