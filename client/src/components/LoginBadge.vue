<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin, useLogout } from '@/model/session';


const session = useSession();
const logout = useLogout();
const login = useLogin();


function logout2() {
    logout();
}

</script>

<template>
    <div class="navbar-item" v-if="session.user">
        Welcome, {{ session.user.name }}
        (<a @click="logout2()">logout</a>)
    </div>
    <div class="navbar-item spacer" v-else>
        <RouterLink to="/login" class=" spacer button is-info">
            <span class="icon">
                <i class="fas fa-user"></i>
            </span>
            <strong>Login</strong>
        </RouterLink>

        <router-link to="/register" class="button spacer is-info">
            <span class="icon">
                <i class="fas fa-user-plus"></i>
            </span>
            <strong>Sign up</strong>
        </router-link>
    </div>
</template>

<style scoped>
.spacer {
    margin-left: 1em;
    margin: 10p;
}
</style>