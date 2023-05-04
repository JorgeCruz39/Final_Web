<script setup lang="ts">
import router from "@/router";
import { useSession, loginWithServer, type User, loginWithUser,useLogin } from "../model/session";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addMessage } from "../model/session";



     
    

 </script>

 <template>
     <div class="box">
        <div>
            <h1 class="title">Instructions on how to use my Web App</h1>
            <h2 class="subtitle">Please follow the instructions below</h2>
            <ol>

                <li>You can log in with username Admin and Password: Admin</li>
                <li>You will be able to register an account</li>
                <li>After you have registered an account you will need to login</li>
                <li>After you have logged in you will be able to create a new post</li>
                <li>After you have created a new post you will be able to view your post</li>
                <li>You Will be able to view all users posts</li>
                <li>Admin have extra permission which will allow you to view the</li>
                <li>Beta Version Of the app which you can add new excercises outside of pre added ones (add to database of excercise)</li>


            </ol>
            

            
        </div>
        
        

     </div>
 </template>


 <style scoped>

 .title{
     font-size: 3rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 1rem;
     text-align: center;
     color: black;
    
 }
 .subtitle{
     color: black;
     font-size: 1.5rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 5rem;
     text-align: center;
 }

 .form{
        margin: 0 auto;
        width: 50%;
        padding: 5rem;
        background-color: white;
        border-radius: 10px;
 }

 .box{
        background-color: transparent;
        height: 100vh;
        display: flex;
        justify-content: center;
 }



 </style>