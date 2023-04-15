<template>
   <div class="todos-page">
      
      <ProfileNavVue 
      :name="person.name"
      :email="person.email"
      :photo="person.photo"
      :id="person.id"/>

      <div class="todos-container">
         <header>
            <div class="go-back">
               <router-link to="/">
               <img src="../icons/leftarrow.png" alt="go back icon">
               </router-link>
               <p>Go Home</p>
            </div>
         </header>

         <main>
            <div class="todo">
               <ul>
                  <li v-for="item in items"
                  :key="item.id"
                  :text="item.content"
                  :checked="item.status"
                  :class="item.class"
                  >
                     <div class="div">
                        <label class="todo-item">{{ item.content }}
                        <input type="checkbox" :class="item.class" >
                        <span class="true-checkmark"></span>
                        </label>
                     </div>
                  </li>

                  <li v-for="item in items"
                  :key="item.id"
                  :text="item.content"
                  :checked="item.status"
                  :class="item.class"
                  >
                     <div class="div">
                        <label class="todo-item">{{ item.content }}
                        <input type="checkbox" :class="item.class" >
                        <span class="true-checkmark"></span>
                        </label>
                     </div>
                  </li>

               </ul>
            </div>
         </main>
      </div>
   </div>
</template>

<script>
import ProfileNavVue from './ProfileNav.vue';

export default{
   name: 'Todos',
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
         items:[
            {
               id:1,
               content: 'Netus et malesuada fames ac. Malesuada fames ac turpis egestas integer eget aliquet',
               status: '',
               class: "class1"
            },
            {
               id:2,
               content: 'Vitae auctor eu augue ut lectus arcu bibendum. Nunc faucibus a pellentesque sit amet porttitor eget',
               status: '',
               class: "class2"
            },
            {
               id:3,
               content: 'Ut tellus elementum sagittis vitae et. Tortor pretium viverra suspendisse potenti nullam ac tortor',
               status: 'checked',
               class: "class3"
            },
            {
               id:4,
               content: 'Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Quam quisque id diam vel quam elementum pulvinar etiam',
               status: 'checked',
               class: "class4"
            },
            {
               id:5,
               content: 'A diam maecenas sed enim ut sem viverra aliquet. Mauris in aliquam sem fringilla ut morbi tincidunt',
               status: '',
               class: "class5"
            },
            {
               id:6,
               content: 'Purus gravida quis blandit turpis. Velit egestas dui id ornare arcu odio ut sem nulla',
               status: 'checked',
               class: "class6"
            },
         ]
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
   @import "../assets/todos_style.scss"
</style>