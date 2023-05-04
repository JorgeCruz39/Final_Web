<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import { recentWorkie, useSession } from '@/model/session';
const props = defineProps({
  workout: {
    type: Object,
    required: true
  }
});
const session = useSession();
</script>
<template>
  <div class="column is-half">
    <article class="media box">
      <figure class="media-left">
        <p class="image">
          <img :src="session.user?.photo" alt="User Photo" class="img">
        </p>
      </figure>
      <figure class="media-left">


      </figure>

      <div class="media-content">
        <div class="content adjsut">
          <p>
            <strong>{{ session.user?.name }}</strong> <small>@{{ session.user?.name }}</small> <small></small>
            <br>
          <p class="words">New Excercise Added: {{ props.workout.workout }} for {{ props.workout.weight }} lbs</p>
          </p>
        </div>
        <nav class="level">
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
      </div>
    </article>
  </div>
</template>
<style>
.words {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
}

.adjust {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;

}
</style>