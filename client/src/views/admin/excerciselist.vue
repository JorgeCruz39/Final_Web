<script setup lang="ts">
import { ref } from 'vue';
import {  getExcercise, getExcercises, type Excercise } from '../../model/Excercise';


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
    <gen-modals></gen-modals>
    <div class="admin-products-list">
        <router-link to="excerciseAdd">
                    <button class="button">
                        <div class="icon">
                            <i class="fas fa-plus"></i>
                        </div>
                        <span>Add a excercise</span>
                    </button>

                </router-link>
        
        <h1 class="title">
            Excercises
        </h1>

        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Muscle Group</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="excercise in excercises" :key="excercise.id">
                    <td> 
                        <td>{{ excercise.id }}</td>
                    </td>
                    <td>{{ excercise.exercise }}</td>
                    <td>{{ excercise.description }}</td>
                    <td>{{ excercise.bodyPart }}</td>
                    <td>

                            <router-link :to="'/admin/products/edit/' + excercise.id" class="button" >
                                <div class="icon">
                                    <i class="fas fa-edit"></i>
                                </div>
                            </router-link>
                            <button type="submit" class="button" @click="(excercise.id)" >
                                <div class="icon">
                                    <i class="fas fa-trash"></i>
                                </div>
                            </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
    .admin-product-img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    .admin-add-product {
        float: right;
    }
</style>