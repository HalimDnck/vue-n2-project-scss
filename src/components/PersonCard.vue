<template>
   <div class="card-container">      
      <div class="top-card">
         <img src="/src/images/user_1.png" alt="Profile Image" class="profile-img">

         <div class="top-right-card">
            <h3 class="name">Jane Doe</h3>
            <p class="email">jane@lorem.com</p>
            <p class="phone">+90 555 678 12 23</p>
         </div>
      </div>

      

      <div class="bottom-card">
         <div class="loc-container">
            <div class="loc-head">
               <img src="/src/icons/heartpin.png" alt="Location Icon">
               Location
            </div>

            <div class="loc-main">
               <p class="home-address">
                  Timko sokak no:2
                  Yeni Mahalle / Ankara  
               </p>
            </div>
         </div>

         <div class="comp-container">
            <div class="comp-head">
               <img src="/src/icons/building.png" alt="Company Icon">
               Company
            </div>

            <div class="comp-main">
               <p class="cpm-address">
                  Timko sokak no:2
                  Yeni Mahalle / Ankara  
               </p>
            </div>
         </div>

         <div class="web-container">
            <div class="web-head">
               <img src="/src/icons/heartpin.png" alt="Website Icon">
               Website
            </div>

            <div class="web-main">
               <p class="web-address">
                  jane.doe.com 
               </p>
            </div>
         </div>
      </div>
      


   </div>
</template>






<script setup>

</script>



<style lang="scss" scoped>
@import '/src/assets/person_card_style.scss'
</style>