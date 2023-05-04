<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { quantity } from '../model/cart';
import Cart from './workouttKeeper.vue';
import Flyout from './Flyout.vue';
import LoginBadge from './LoginBadge.vue';
import Notifications from './Notifications.vue';
import { useSession } from '@/model/session';
const session = useSession();
const isMenuActive = ref(false);
const isCartActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  console.log({ isMenuActive });
}
</script>

<template>
  <nav class="navbar is-primary ">
    <div class="container">
      <div class="navbar-brand">
        <icon>
          <i class="fas fa-dumbbell down"></i>
        </icon>
        <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">

          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/about" class="navbar-item">About</RouterLink>
          <RouterLink to="/socialView" class="navbar-item">Social</RouterLink>
          <RouterLink to="/addWorkout" class="navbar-item">Add Workout</RouterLink>


          <div class="navbar-item has-dropdown is-hoverable" v-if="session.user?.isAdmin">
            <a class="navbar-link" href="">
              Admin
            </a>
            <div class="navbar-dropdown">
              <RouterLink class="navbar-item" to="/admin/products">
                BETA excercise add
              </RouterLink>
              <RouterLink class="navbar-item" to="/admin/usersView">
                Users
              </RouterLink>

            </div>
          </div>
        </div>

        <div class="navbar-end">

          <div class="navbar-item">
            <Notifications />
          </div>
          <LoginBadge />

          <div class="navbar-item">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.quantity-tag {
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 1rem;
}

.down {
  font-size: 2rem;
  margin-right: 0.5rem;
  margin: 10px;
}
</style>