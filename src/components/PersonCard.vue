<template>

   <a href=""><div class="card-container">      
      <div class="top-card">
         <img :src="photo" alt="Profile Image" class="profile-img">

         <div class="top-right-card">
            <h3 class="name">{{ name }}</h3>
            <p class="email">{{ email }}</p>
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
                  {{ website }}
               </p>
            </div>
         </div>
      </div>
      


   </div></a>

</template>

<script>

   export default{
      props: ['name', 'email', 'photo', 'website'],

      
   }
</script>

<style lang="scss" scoped>
@import '/src/assets/person_card_style.scss'
</style>