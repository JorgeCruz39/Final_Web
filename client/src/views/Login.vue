<script setup lang="ts">

import { ref } from 'vue';
import {loadscript} from '../model/myFetch';

/*async function googleLogin(){
    await loadscript("https://apis.google.com/js/api.js", 'google-login');
    await loadscript("https://apis.google.com/js/platform.js", 'gapi');

}
*/

</script>

<template>
    <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in. <br>
            To login just click the button on the top right corner.
        </h2>
        <p>
            
        </p>
    </div>
</template>


<style scoped>

</style>