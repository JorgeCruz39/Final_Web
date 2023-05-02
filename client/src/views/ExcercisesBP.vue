
<script setup lang="ts">
import { ref } from 'vue';
import { getExcercise, getExcercises, type Excercise } from '../model/Excercise'
import { addToCart } from '../model/cart';

const excercises = ref<Excercise[]>([]);
getExcercises().then((data) => {
    excercises.value = data.data;
});

</script>

<template>
    <div>
        <h1 class="title">
            View All Excercises by Body Part
        </h1>
        <!--Form to select body part from excercises-->
        <form>
            <label for="bodypart">Choose a body part:</label>
            <select name="bodypart" id="bodypart">
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="shoulders">Shoulders</option>
                <option value="legs">Legs</option>
                <option value="arms">Arms</option>
                <option value="core">Core</option>
            </select>
        </form>
        <!--Display excercises by body part-->
        <div class="product-list">

            <progress v-if="!excercises.length" class="progress is-large is-info" max="100">60%</progress>
            
            <div class="product" v-for="excercise in excercises" :key="excercise.id" v-if="excercise.bodypart == bodypart">
                <img :src="product.thumbnail" :alt="product.title" />
                <h3>{{ excercise.excercise}}</h3>
                <p>{{ excercise.description }}</p>
                <p>
                    <span>$</span>
                    <i class="price">
                        {{ excercise.bodypart }}
                    </i>
                </p>
                <button class="button is-primary" @click="addToCart(product)">+</button>
            </div>
        </div>
        


    </div>
</template>



<style scoped>

</style>