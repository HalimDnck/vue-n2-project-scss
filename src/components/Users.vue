<template>
   
   <div class="app-page">
    <LeftNav />

    <div class="main-content">
      <h2>All Users</h2>
 
      <div class="cards">
      <router-link class="links"
      v-for="person in persons"
      :key="person.id"
      :name="person.name"
      :email="person.email"
      :website="person.website"
      :photo="person.photo"
      :to="{ name: 'Todos', params: {id: person.id}}"
      ><div class="card-container">      
      <div class="top-card">
      <img :src="person.photo" alt="Profile Image" class="profile-img">


      <div class="top-right-card">
      <h3 class="name">{{ person.name }}</h3>
      <p class="email">{{ person.email }}</p>
      <p class="phone">+90 555 678 12 23</p>
      </div>
      </div>



      <div class="bottom-card">
      <div class="loc-container info">
      <div class="loc-head info-head">
         <img src="/src/icons/heartpin.png" alt="Location Icon">
         Location
      </div>

      <div class="loc-main info-main">
         <p class="home-address">
            Timko sokak no:2
            Yeni Mahalle / Ankara  
         </p>
      </div>
      </div>

      <div class="comp-container info">
      <div class="comp-head info-head">
         <img src="/src/icons/building.png" alt="Company Icon">
         Company
      </div>

      <div class="comp-main info-main">
         <p class="cpm-address">
            Timko sokak no:2
            Yeni Mahalle / Ankara  
         </p>
      </div>
      </div>

      <div class="web-container info">
      <div class="web-head info-head">
         <img src="/src/icons/world.png" alt="Website Icon">
         Website
      </div>

      <div class="web-main info-main">
         <p class="web-address">
            {{ person.website }}
         </p>
      </div>
      </div>
      </div>
      </div>
      </router-link>
        
      </div>

      
    </div>

  </div>

  

</template>

<script>
import LeftNav from './LeftNav.vue'
import { useRoute } from 'vue-router';


export default{
   name: 'Users',
   components:{
      LeftNav,
      
   },
   props: ['name', 'email', 'photo', 'website'],
   
   
   data() {
      return{
         persons:[
            {
               id: 1,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com'
            },
            {
               id: 2,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com'
            },
            {
               id: 3,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com'
            },
            {
               id: 4,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com'
            },
            {
               id: 5,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com'
            },
            {
               id: 6,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com'
            },
            {
               id: 7,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com'
            },
            {
               id: 8,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com'
            },
            {
               id: 9,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com'
            },
         ]
      }
   }
}
</script>

<style lang="scss">
   @import "../assets/main_style.scss"
</style>