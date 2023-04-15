<template>
   <div class="posts-page">
      <ProfileNavVue 
      :name="person.name"
      :email="person.email"
      :photo="person.photo"/>

      <div class="posts-container">
         <header>
            <div class="go-back">
               <router-link to="/">
               <img src="../icons/leftarrow.png" alt="go back icon">
               </router-link>
               <p>Go Home</p>
            </div>
         </header>

         <main>
            <ul>
               <li v-for="person in persons"
               :key="person.id">
                  <div class="post">
                     <h2 class="post-title">Post Title {{ person.id }}</h2>
                     <p class="post-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia esse temporibus harum ea laudantium officia nesciunt iste hic doloremque dolorum dignissimos, quo commodi vel amet ipsum maxime quasi eligendi excepturi expedita repellendus vitae tempora?</p>
                     <div class="see-more">
                     <p>See More</p>
                     <button @click="() => ShowPopup('buttonFunc')">
                        <img src="../icons/rightarrow.png" alt="see more">
                     </button>
                  </div>
               <hr>
            </div>
               </li>
            </ul>
         </main>

         <section class="popup-section">
            <PostPopup v-if="popupActive.buttonFunc"
            :ShowPopup="() => ShowPopup('buttonFunc')">

            </PostPopup>
         </section>
      </div>
   </div>
</template>

<script>
import ProfileNavVue from './ProfileNav.vue';
import PostPopup from './PostPopup.vue'
import { ref } from 'vue';

export default{
   name: 'Posts',
   components:{
      ProfileNavVue,
      PostPopup
   },
   props: ['content', 'status', 'name', 'email', 'photo', 'website'],

   setup(){
      const popupActive = ref({
         buttonFunc: false
      })

      const ShowPopup = (active) =>{
         popupActive.value[active] = !popupActive.value[active]
      }

      return{
         PostPopup,
         popupActive,
         ShowPopup
      }
   },

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
         posts:[1,2,3,4,5,6],
      }
   },
   computed: {
      person() {
         return this.persons.find((person) => person.id === Number(this.id));
      }
   }
}
</script>

<style lang="scss" >
@import "../assets/post_style.scss"
</style>