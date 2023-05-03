<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin, useLogout } from '@/model/session';
import { getUsers } from '../model/users'
import type { sequenceExpression } from '@babel/types';
import { getWorkout } from '@/model/workout';
const session = useSession();
const workouts1 = getWorkout();

</script>

<template>
  <main>
    <div class="container">
      <div class="columns block">
        <div class="column is-one-quarter">
          <div class="box"></div>

        </div>
        <div class="column" v-if="session.user">
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Session</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">{{ session.user.TodayDistance }} mi</h1>
                <caption class="caption ">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{session.user.TodayDuration }} </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{session.user.TodayPace }} MPH</h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{session.user.TodayCalories}}</h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.WeeksDistance }} mi</h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.WeeksDuration }}</h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.WeeksPace}} MPH</h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">{{ session.user.WeeksCalories }}</h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.AlltimeDistance }} mi</h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.AlltimeDuration }}</h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.AlltimePace }} mph</h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> {{ session.user.AlltimeCalories }}</h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>
          <div class="column" v-else>
          <div class="box has-text-centered ">
            <h1 class=""><strong>Today</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> NaN mph </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> NaN mph</h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 mi</h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> NaN mph</h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 0 </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="box"></div>

        </div>
      </div>
    </div>

  </main>
</template>


<style>

@media (min-width: 1024px) {
  .title {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .quarter{

    font-size: 56px;
  }

}

caption {
  padding-left: 117px;
}
</style>