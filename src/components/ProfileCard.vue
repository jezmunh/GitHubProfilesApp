<script setup>
const props = defineProps({
    profile: Object,    
    
    
});
</script>

<template>
    <div class="card">
        <img :src="profile.profileData.avatar_url" />
        <nav>
            <p id="username">{{ profile.profileData.login }}</p>
            <div id="info">            
            <p>Location: {{ profile.profileData.location }}</p>            
            <p>Followers: {{ profile.profileData.followers }}</p>
            <p>Following: {{ profile.profileData.following}}</p>
            <p>Public repos: {{ profile.profileData.public_repos }}</p>
            <p><a :href="profile.profileData.html_url" target="_blank">Go to profile</a></p>  
            </div>          
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 400px;
    /* width: 100%; */
    padding: 10px;    
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    background: #212529;
    color: #aaa;
    border-radius: 10px;
    img {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }
    nav {
        text-align: center;
        padding-top: 10px;
    
    }
    a {
        color: #52b788;
        text-decoration: none;
        font-size: 18px;
        line-height: 2.3;
        &:hover {
            text-decoration: dashed underline;
        }
    }
    #info {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 1.4;
    
    }
    #username {
        color: white;
        font-size: 24px;
        text-align: center;
        margin-top: 10px;
    }
}

</style>