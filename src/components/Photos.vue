<template>
   <div class="photos-page">
      <ProfileNavVue 
      :name="person.name"
      :email="person.email"
      :photo="person.photo"/>

      <div class="photos-container">
         <header>
            <div class="go-back">
               <router-link :to="{ name: 'Albums'}">
               <img src="../icons/leftarrow.png" alt="go back icon">
               </router-link>
               <p>Go Albums</p>
            </div>
         </header>

         <main>
            <div class="image"
            v-for="person in persons"
            :key="person.id"
            :strId="person.strId">
               <img :src="person.strId"  alt="photos">
            </div>
         </main>
      </div>
   </div>
</template>

<script>
import ProfileNavVue from './ProfileNav.vue';

export default{
   name: 'Photos',
   components:{
      ProfileNavVue,
   },

   props: ['content', 'status', 'name', 'email', 'photo', 'website', 'strId'],
   


   data() {
      return{
         id: this.$route.params.id,
         persons:[
            {
               id: 1,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com',
               strId: '/src/images/galery_1.jpg'
            },
            {
               id: 2,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com',
               strId: '/src/images/galery_2.jpg'
            },
            {
               id: 3,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com',
               strId: '/src/images/galery_3.jpg'
            },
            {
               id: 4,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com',
               strId: '/src/images/galery_4.jpg'
            },
            {
               id: 5,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com',
               strId: '/src/images/galery_5.jpg'
            },
            {
               id: 6,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com',
               strId: '/src/images/galery_6.jpg'
            },
            {
               id: 7,
               name: 'Jane Doe',
               email: 'jane@lorem.com',
               photo: '/src/images/user_3.png',
               website: 'jane.doe.com',
               strId: '/src/images/galery_7.jpg'
            },
            {
               id: 8,
               name: 'John Doe',
               email: 'john@lorem.com',
               photo: '/src/images/user_1.png',
               website: 'john.doe.com',
               strId: '/src/images/galery_8.jpg'
            },
            {
               id: 9,
               name: 'Nazlı Uysal',
               email: 'nazlı.uysal@lorem.com',
               photo: '/src/images/user_2.png',
               website: 'nazli.uysal.com',
               strId: '/src/images/galery_9.jpg'
            },
         ],
         
      }
   },
   computed: {
      person() {
         return this.persons.find((person) => person.id === Number(this.id));
      },
   },
   
}


</script>



<style scoped lang="scss">
@import "../assets/photos_style.scss"
</style>