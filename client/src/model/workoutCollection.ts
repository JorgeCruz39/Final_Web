/*  B"H
*/

import { computed, ref } from "vue";
import type { Excercise } from "./Excercise";

const WorkoutCollection = ref([] as WorkoutItem[]);

export function useWorkoutCollection() {
    return WorkoutCollection;
}

export interface WorkoutItem {
    productId: number;
    product: Excercise;
    quantity: number;
    weight: number;
    sets: number;
    reps: number;
}

export function addToWorkoutCollection(product: Excercise, weight: number, sets: number, reps: number) {
    const item = WorkoutCollection.value.find((p) => p.productId == product.id);
    if (item) {
        item.quantity++;
    } else {
        WorkoutCollection.value.push({
            productId: product.id,
            product,
            quantity: 1,
            weight: weight,
            sets: sets,
            reps: reps
        });
    }
}

export function removeFromWorkout(index: number) {
        WorkoutCollection.value.splice(index, 1);
}

export const amountofWorkouts = computed(() => WorkoutCollection.value.reduce((total, item) => total + item.quantity, 0));