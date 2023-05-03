<script setup lang="ts">
import { ref } from 'vue';
import {  getWorkouts, type Workout } from '@/model/Workouts';
import { createWorkout } from '@/model/Workouts';
import { useSession, addMessage } from '@/model/session';
import { useRoute } from 'vue-router';
import { useWorkoutCollection, WorkoutCollection } from '../model/workoutCollection';

const session = useSession();
const route = useRoute(); 


const collectionWorkouts = ref(useWorkoutCollection());


  
console.log(collectionWorkouts.value)
</script>

<template>



<div v-for="workout in collectionWorkouts" >
  {{ workout.product.exercise }}
</div>

  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
