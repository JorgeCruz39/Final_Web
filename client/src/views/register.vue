<script setup lang="ts">

import type { User } from '@/model/session';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUser, createUser } from '@/model/session';
import { addMessage, loginWithUser, useSession } from '@/model/session';
import router from '@/router';

const session = useSession();
const route = useRoute();
const user = ref<User>({} as User);
getUser(+route.params.id).then((data) => {
    user.value.isAdmin = false;
    user.value.workouts = [];
    user.value = data.data ?? {} as User;
    console.log(user.value)
})
function save() {
    if (user.value.id) {
        console.log('update')
    } else {
        createUser(user.value).then((data) => {
            console.log(data)
            addMessage('New User Added', 'info')
        })
    }
}



</script>




<template>
    <div>


        <form class="admin-user-edit" @submit.prevent="save()">

            <h1 class="title" >Add New User</h1>

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name" v-model="user.name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Email" v-model="user.email">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="password" v-model="user.password">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <RouterLink to="/home">
                        <button class="button is-link is-light">Cancel</button>
                    </RouterLink>
                </div>
            </div>
        </form>







    </div>
</template>



<style scoped>
.admin-user-edit {
    margin: 5rem;
    max-width: 600px;
    margin: 0 auto;
    max-height: 100%;
    background-color: #ffffff;
}

.admin-user-edit .title {
    text-align: center;
    margin-top: 2rem;
}

.admin-user-edit .field {
    margin: 1rem;
}

.admin-user-edit .field .label {
    margin-bottom: 0.5rem;
}

.box {
    margin: 5rem;
    max-width: 600px;
    margin: 0 auto;
    max-height: 100%;
}
</style>