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
            View All Excercises
        </h1>


        <div class="product-list">

            <progress v-if="!excercises.length" class="progress is-large is-info" max="100">60%</progress>
            
            <div class="product" v-for="excercise in excercises" :key="excercise.id">
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
    }

    .price {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>