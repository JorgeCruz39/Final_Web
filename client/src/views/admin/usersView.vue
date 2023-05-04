<script setup lang="ts">
import { ref } from 'vue';
import { getUsers, useSession, type User } from '@/model/session';
const session = useSession();
const USASS = ref<User[]>([]);
 getUsers().then((data) => {
     USASS.value = data.data;
 });


</script>


<template>
    <div>
        <div class="container">
            <table class="table is-bordered is-narrow is-hoverable">
                <thead>
                    <tr>
                        <th class="title is-5">Name</th>
                        <th class="title is-5">Email</th>
                        <th class="title is-5">Admin</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in USASS" :key="index">
                        <td class="title is-5">{{user?.name}}</td>
                        <td class="title is-5">{{user?.email}}</td>
                        <td class="title is-5">{{user?.isAdmin}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<style scoped>

</style>