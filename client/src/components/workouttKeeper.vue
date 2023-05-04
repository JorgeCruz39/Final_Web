<script setup lang="ts">
import { removeFromWorkout, amountofWorkouts, useWorkoutCollection } from '@/model/workoutCollection';
const workoutCollection = useWorkoutCollection();


</script>

<template>
    <div class="cart">
        <h1 class="title">
            Workouts
            <small>
                {{ amountofWorkouts }}
                ({{ workoutCollection.length }} items)
            </small>
        </h1>
        <p></p>
        <div class="cart-item" v-for="item, i in workoutCollection">
            <div>
                <b>{{ item.product.exercise }}</b>
                <p>
                    Muscle Group: {{ item.product.bodyPart }}
                    <br>
                    Number of Sets: {{ item.sets }}
                    <br>
                    Number of reps in set : {{ item.reps }}
                    <br>
                    Weight on workout: {{ item.weight }}

                </p>

            </div>
            <button class="button is-danger" @click="removeFromWorkout(i)">
                <span class="icon">
                    <i class="fas fa-trash"></i>
                </span>
            </button>
        </div>
    </div>
</template>


<style scoped>
.cart {
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.cart-item {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    padding-right: 5px;

    overflow: hidden;
    background-color: lavenderblush;

}

.cart-item img {
    width: 100px;
    height: 100px;
}

small {
    font-size: 0.5em;
}
</style>