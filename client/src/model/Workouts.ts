import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api,  useSession } from "./session";
import type { User } from "./session";
import {WorkoutCollection, type WorkoutItem} from "./workoutCollection";

const session = useSession();

export function useWorkoutCollection() {
    return WorkoutCollection;
}

export interface Workout {
    id: number;
    user: User;
    workoutItems: WorkoutItem[];
    date: string;
}

export function getWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('workout')

}

export function getWorkout(id: number): Promise<DataEnvelope<Workout>> {

    return api(`workout/${id}`)

}

export function createWorkout(WorkoutCollection: any): Promise<DataEnvelope<Workout>> {
        return api('workout', WorkoutCollection, 'POST')
}

export function deleteExcercise(id: number): Promise<DataEnvelope<Workout>> {
        return api(`workout/${id}`, undefined, 'DELETE')
}