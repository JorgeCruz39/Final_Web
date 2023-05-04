<script setup lang="ts">
import { ref } from 'vue';
import { getUsers, type User } from '@/model/session';
import NewWorkoutadd from '@/components/NewWorkoutadd.vue';
import { useSession } from '@/model/session';
import WorkoutSocial from '@/components/WorkoutsSocial.vue';
import type { Workout } from '@/model/Workouts';
import { useWorkouts } from '@/model/Workouts';


const USASS = ref<User[]>([]);
 getUsers().then((data) => {
     USASS.value = data.data;
 });

 const session = useSession();

const workie = useWorkouts();
const userWorkie = ref(workie)

</script>

<template>
    <div v-for="(user, index) in USASS" :key="index" v-if="session.user">
      <div class="column is-half">
        <div class="box">
          <article class="media box">
            <figure class="media-left">
              <p class="image">
                <img :src="user?.photo" alt="User Photo" class="img">                   
              </p>
            </figure>
            <figure class="media-left">
            </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ user?.name }}</strong> <small>@{{ user?.name }}</small>
                    <br>                    
                    <strong>TEST</strong> {{ user.workouts }} lbs
                    <br>
                  </p>
                </div>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" aria-label="reply">
                    <span class="icon is-small">
                      <i class="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="retweet">
                    <span class="icon is-small">
                      <i class="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="like">
                    <span class="icon is-small">
                      <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
          </article>
        </div>
      </div>
    </div>
    <div v-else class="notLoggedin">
        You are not Logged in!
    </div>

</template>

<style>
.notLoggedin{
    margin-top: 5rem;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-align: center;
    color: black;
}
</style>