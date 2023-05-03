<script setup lang="ts">

import { ref } from 'vue';
import NewWorkoutadd from '@/components/NewWorkoutadd.vue';
import { useSession } from '@/model/session';
import WorkoutSocial from '@/components/WorkoutsSocial.vue';

const isWorkoutActive = ref(false);
const session = useSession();

const isCadrioActive = ref(false);





function toggleWorkout() {
    isWorkoutActive.value = !isWorkoutActive.value;
    console.log(isWorkoutActive);
}


</script>



<template>
    <div>
        <div class="container">

        <div class="column is-quarter"></div>
           
            <div class="column">

                <div class="button is-primary is-large is-fullwidth" @click="toggleWorkout" > Add Workout</div>    
                <div v-if="isWorkoutActive==true" class="modal is-active">  
                    <div class="modal-content">  
                    <NewWorkoutadd @close="isWorkoutActive=false"/>
                    </div>
                </div>

                <div class="moveplease">
                    <div class="column">
                  <h2 class="title">Workouts done by you!</h2>
                    <div v-for="w in session.user?.workouts.slice().reverse()" :key="w.workout">
                         <WorkoutSocial :workout="w" @close="$emit('close')" />
                     </div>
                 </div>
                 </div>

               
                 

                                  
            </div>

            </div>

        </div>


        


  
</template>

<style scoped>

.button{
    background-color: #3AAfa9;
    color: white;
    padding: 1rem;
    margin: 1rem;
    border: none;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 10px #999;
}


.modal{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 120%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.column{
    display: flex;
    flex-direction: column;
    background-color: transparent;
}

.moveplease{
    margin-top: 5rem;
    margin-left: 28rem;
}


</style>