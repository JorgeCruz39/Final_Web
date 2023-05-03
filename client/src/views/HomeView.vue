<script setup lang="ts">
import WorkoutBox from '@/components/WorkoutStat.vue'
import { useSession, totalWeight } from '@/model/session';


const session = useSession();

</script>

<template>


 
<div v-if="session.user">
   <div class="container">
      <div class="columns">
         <div class="column">
            <div class="clean is-primary">
               <div class="title"> Just This Week</div>
               <WorkoutBox />
               <hr>
               <div class="title"> Previous </div>
               <WorkoutBox >
                  <template #totalWeight> 
                     {{ totalWeight }}
                  </template>
                  <template #totalLifts>
                     {{ session.user.workouts.length }}
                  </template>
               </WorkoutBox>
            </div>
         </div>
         <div class="column">
            <div class=" clean is-light">
               <div class="title"> All Time</div>
               <WorkoutBox >
                  <template #totalWeight> 
                     {{ totalWeight }}
                  </template>
                  <template #totalLifts>
                     {{ session.user.workouts.length }}
                  </template>
               </WorkoutBox>
               <hr>
               <div class="title"> Today</div>
               <WorkoutBox >
                  <template #totalWeight> 
                     {{ totalWeight }}
                  </template>
                  <template #totalLifts>
                     {{ session.user.workouts.length }}
                  </template>
               </WorkoutBox>

            </div>
         </div>
      </div>
   </div>
</div>
<div class="notLoggedin " v-else>
You are not Logged in!
</div>


    


  
</template>

<style scoped>

.container{
      padding: 0;
      margin: 0;
      background-color: transparent;
   }
   .title{
      
      padding: 0;
      margin: 20px;
      background-color: transparent;
      
      
   }
    .clean{
        padding: 0;
        margin: 0;
        background-color: rgba(255, 214, 190, 0.836);
   }
   .column{
      padding: 1rem;
      margin: 1rem;
      background-color: transparent;
   }
   .box{
      background-color: white;
      color: white;
      padding: 1rem;
      margin: 1rem;
      border-radius: 0;
   }
   
   
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