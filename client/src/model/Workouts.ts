import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api,  useSession } from "./session";
import type { User } from "./session";
import type {WorkoutItem } from "./workoutCollection";
import { useWorkoutCollection } from '../model/workoutCollection';
import { ref } from "vue";


const session = useSession();

const collectionWorkouts = ref(useWorkoutCollection() as any);

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

export function createWorkout(collectionWorkouts: any): Promise<DataEnvelope<Workout>> {
        return api('workout', collectionWorkouts)
}

export function deleteWorkout(id: number): Promise<DataEnvelope<Workout>> {
        return api(`workout/${id}`, undefined, 'DELETE')
}