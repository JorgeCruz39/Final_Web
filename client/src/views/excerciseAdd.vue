<script setup lang="ts">

import type { Product } from '@/model/products';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getExcercises, createExcercise, type Excercise } from '@/model/Excercise';
import { useSession, addMessage } from '@/model/session';

    const session = useSession();
    const route = useRoute(); 

    const excercise = ref<Excercise>({} as Excercise);

    function save() {

            createExcercise(excercise.value).then((data) => {
                console.log(data)
                addMessage('Product created', 'success')
            })   
    }

</script>


<template>
    <div>
        <form class="admin-product-edit" @submit.prevent="save()">
            <h1>Add New Excercise</h1>
            <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="excercise.exercise">
            </div>
            </div>

            <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea class="textarea" placeholder="Description" v-model="excercise.description"></textarea>
            </div>
            </div>

            <div class="field">
            <label class="label">bodyPart</label>
            <div class="control">
                <select class="input" type="string" placeholder="Price" v-model="excercise.bodyPart">
                    <option value="chest">Chest</option>
                    <option value="back">Back</option>
                    <option value="legs">Legs</option>
                    <option value="arm">Arms</option>
                    <option value="shoulder">Shoulders</option>
                    <option value="abs">Abs</option>
                    
           </select>
            <div class="field is-grouped">
                <div class="control">
                        <button class="button is-link" @click="$emit('close')">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" @click="$emit('close')" >Cancel</button>
                    </div>
                </div>

                
                
                
            </div>
            </div>


        </form>


    </div>
</template>



<style scoped>

</style>