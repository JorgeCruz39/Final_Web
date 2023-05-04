
<script setup lang="ts">
import { ref } from 'vue';
import { getExcercises, type Excercise } from '../model/Excercise'
import { addToWorkoutCollection } from '../model/workoutCollection'

const excercises = ref<Excercise[]>([]);
getExcercises().then((data) => {
    excercises.value = data.data;
});

const selected = ref('')

const reps = ref(0)
const sets = ref(0)
const weight = ref(0)

</script>

<template>
    <div>
        <h1 class="title">
            View All Excercises by Body Part
        </h1>
        <!--Form to select body part from excercises using vmodel-->
        <form>
            <label for="bodyPart">Select a Body Part:</label>
            <select v-model="selected" selected="chest">
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                <option value="arm">Arms</option>
                <option value="shoulder">Shoulders</option>
                <option value="abs">Abs</option>
                <option value="all">All</option>
            </select>
        </form>




        <progress v-if="!excercises.length" class="progress is-large is-info" max="100">60%</progress>
        <!--Display excercises by body part -->
        <div>
            <h1>Dont See an excercise? Click Here to add one!</h1>
            <router-link to="excerciseAdd">
                <span>Add an excercise</span>
            </router-link>

        </div>
        <div class="product-list" v-for="excercise in excercises " :key="excercise.id">
            <div class="product" v-if="excercise.bodyPart === selected">
                <div>
                    <h1 class="pop">{{ excercise.exercise }}</h1>
                    <p>{{ excercise.description }}</p>
                    <br>
                    <form>
                        <label for="reps">Reps:</label>
                        <input type="number" id="reps" name="reps" v-model="reps">
                        <label for="sets">Sets:</label>
                        <input type="number" id="sets" name="sets" v-model="sets">
                        <label for="weight">Weight:</label>
                        <input type="number" id="weight" name="weight" v-model="weight">
                    </form>

                    <br>
                    <p><button class="button is-primary" @click="addToWorkoutCollection(excercise, weight, sets, reps)">Add
                            excercise to workouts +</button>
                        <br>
                        <br>
                        <i class="pop">
                            Muscle Worked out: {{ excercise.bodyPart }}
                        </i>
                    </p>

                </div>
            </div>


        </div>


    </div>
</template>



<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: aliceblue;
}

.product {
    flex-basis: 12rem;
    flex-grow: 1;
    padding: .5rem;
    margin: 1rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: aliceblue;

}

.pop {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>