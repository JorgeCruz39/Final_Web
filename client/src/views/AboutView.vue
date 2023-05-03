<script setup lang="ts">
import { ref } from 'vue';
import {  getWorkouts, type Workout } from '@/model/Workouts';
import { createWorkout } from '@/model/Workouts';
import { useSession, addMessage } from '@/model/session';
import { useRoute } from 'vue-router';

const session = useSession();
const route = useRoute(); 

const workouts = ref<Workout[]>([]);

  getWorkouts().then((data) => {
    workouts.value = data.data;
});



  

</script>

<template>



  
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
