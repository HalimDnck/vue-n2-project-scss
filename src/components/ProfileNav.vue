<template>
   <div class="user-sidebar">
      <div class="profile-container">
         <div class="profile">
            <img :src="photo" alt="profile image">
            <div class="profile-infos">
               <h1 class="user-name">{{ name }}</h1>
               <p class="user-email">{{ email }}</p>
            </div>
         </div>
         <hr>
      </div>
      
      
      <div class="button-container">
         <router-link to="" custom v-slot="{ navigate }">
            <button class="active-page" @click="navigate" role="link">
               <div class="active-shape"></div>
               <img src="/src/icons/checklist.png" alt="">
               Todos
            </button>
         </router-link>

         <router-link to="" custom v-slot="{ navigate }">
            <button class="other-page" @click="navigate" role="link">
               <div class="active-shape"></div>
               <img src="/src/icons/notebook.png" alt="">
               Posts
            </button>
         </router-link>

         <router-link to="" custom v-slot="{ navigate }">
            <button class="other-page" @click="navigate" role="link">
               <div class="active-shape"></div>
               <img src="/src/icons/heartphoto.png" alt="">
               Albums
            </button>
         </router-link>
      </div>

      <div class="logo-container">
         <hr>
         <a href="#">
         <img src="/src/icons/logo.png" alt="N2Mobil Logo">
         N2Mobil
         </a>
      </div>
   </div>
</template>

<script>
export default{
   name: 'ProfileNav',
   
   props: ['name', 'email', 'photo', 'website'],
}
</script>

<style lang="scss">
   @import "/src/assets/profile_nav_style.scss";
</style>