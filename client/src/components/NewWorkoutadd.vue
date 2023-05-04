<script setup lang="ts">
import { useSession, useWorkout, addWorkout, addMessage, updateUser, type User } from '@/model/session';
import { ref } from 'vue';

const session = useSession();
const user = ref(session.user);
const toggle = ref(false);
const workout = useWorkout();


function toggleWorkout() {
    toggle.value = !toggle.value;
    console.log(toggle);
}
function addWorkoutToUser(workoutName: string, workoutWeight: number) {
    addWorkout(workoutName, workoutWeight);
}
function saveWrk(workoutName: string, workoutWeight: number) {
    addWorkoutToUser(workoutName, workoutWeight);
    updateUser(session.user as User);
}
const workoutName = ref('');
const workoutWeight = ref(0);
</script>
<template>
    <div>

        <div class="model-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Workout</p>
                <button class="delete" @click="$emit('close')"></button>
                <div v-if="toggle">
                </div>
            </header>
            <section class="modal-card-body">

                <div class="field">
                    <label class="labelWeight">Weight (lbs)</label>
                    <div class="control">
                        <input type="number" required v-model="workoutWeight">
                    </div>
                </div>
                <div class="field">
                    <label class="labelWorkout">Workout</label>
                    <div class="control">
                        <div class="select">
                            <select type="workout" required v-model="workoutName">
                                <option>Bench</option>
                                <option>Squat</option>
                                <option>Deadlift</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="saveWrk(workoutName, workoutWeight), $emit('close')">Add</button>
                <button class="button" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<style scoped>
.box {
    padding: 1rem;
    margin-right: 5rem;
    margin-left: 5rem;
    background-color: #360c5e invert(100%);
    color: white;


}
.modal-background {
    padding: 1rem;
    margin-right: 5rem;
    margin-left: 5rem;
    background-color: #360c5e invert(100%);
    color: white;


}
</style>