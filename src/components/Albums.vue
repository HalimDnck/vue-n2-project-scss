<template>
   <div class="albums-page">
      <ProfileNavVue 
      :name="person.name"
      :email="person.email"
      :photo="person.photo"/>

      <div class="albums-container">
         <header>
            <div class="go-back">
               <router-link to="/">
               <img src="../icons/leftarrow.png" alt="go back icon">
               </router-link>
               <p>Go Home</p>
            </div>
         </header>
         
         <main>
            <div class="album-cards">
               <router-link>
                  <div class="card-contain">
                     <div class="image-cont">
                        
                     </div>
                  </div>

               </router-link>
            </div>

         </main>



      </div>
   </div>

</template>

<script>
import ProfileNavVue from './ProfileNav.vue';

export default{
   name: 'Albums',
   components:{
      ProfileNavVue,
   },
   props: ['content', 'status', 'name', 'email', 'photo', 'website'],


   data() {
      return{
         id: this.$route.params.id,
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
         ],
         
      }
   },
   computed: {
      person() {
         return this.persons.find((person) => person.id === Number(this.id));
      }
   }
}
</script>



<style lang="scss">
@import "../assets/albums_style.scss"
</style>