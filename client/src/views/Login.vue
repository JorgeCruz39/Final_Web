<script setup lang="ts">
import router from "@/router";
import { useSession, loginWithServer, type User, loginWithUser,useLogin } from "../model/session";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addMessage } from "../model/session";



const session = useSession();
const email = ref('');
const password = ref('');
function login() {
    loginWithServer(email.value, password.value).then((user) => {
        if(user.name === null || user === undefined){
          addMessage("user is null", "warning");
            return;
        }
    else{
        router.push("/home");
    }

       
    });
}




     
    

 </script>

 <template>
     <div v-if="session.user == null" >
        <div class="form box">

            <h1 class="title">Login</h1>
            <h2 class="subtitle">Please enter your credentials</h2>
    
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="email">
                </div>
            </div>
    
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
            </div>
    
            <div class="field">
                <div class="control">
                    <button class="button is-link" @click="login">Login</button>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <p>Don't have an account? <router-link to="/register">Register</router-link></p>
                </div>
            </div>

        </div>

     </div>
     <div v-else class="notLoggedin">
            <h1>Logged in</h1>
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
     font-size: 16px;
     line-height: 1.2;
     text-align: center;
        margin-bottom: 1rem;

 }

 .box{
        height: 100vh;
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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