<script setup>
import ProfileCard from "../components/ProfileCard.vue";
import { GetInfo } from "../api/api.js";
import {onBeforeMount, onUpdated, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute(); // getting the route
const router = useRouter();
// console.log(route.params.user)
let username = ref("");

function getData() { 
    router.push({ name: 'profile', params: { user: username.value} });
    setTimeout(() => {
        router.go();
    }, 200);
    
    // location.href = `/${form.username}`;
}
const profile = ref();

onBeforeMount(async() => {    
    profile.value = await GetInfo(route.params.user);        
});
</script>

<template>
    <div v-if="profile.status_code != 200">
        <h1>Something went wrong... App couldn't find an account or internal error happened.</h1>
        <label>
            <input type="text" id="searchValue" v-model="username" placeholder="Enter username" autocomplete="off"/>
            <button id="searchBtn" @click="getData">Search</button>
            
        </label>
    </div>
    <div v-else>
        <h1>Enter the github username in the form below to get information about GitHub Profile</h1>
        <label>
            <input type="text" id="searchValue" v-model="username" placeholder="Enter username" autocomplete="off"/>
            <button id="searchBtn" @click="getData">Search</button>
            
        </label>
        <ProfileCard :profile="profile"/>
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
} 

h1 {
   font-size: 28px;
   color: white;
   text-align: center;
   padding-top: 10px;
}
label {
    margin: 10px;
}
input[type="text"] {
    padding: 10px 20px;
    border-radius: 5px;
    border: 0px solid black;
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
}
button {
    padding: 10px 20px;
    margin-left: 5px;
    border-radius: 5px;
    background: #70a9a1;
    color: #fff;
    border: 0px solid black;
    cursor: pointer;    
    font-size: 1.2em;
    transition: all 0.2s;
    &:hover {
        background: #1f363d;
    }
    
}
</style>