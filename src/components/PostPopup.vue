<template>
   <div class="popup">
      <div class="inner">
         <slot/>
         <div class="header">
            <p class="post-title">Post Title</p>

            <button
            @click="ShowPopup()">
               <img src="../icons/xicon.png" alt="quit icon">
            </button>
         </div>

         <div class="post-detail">
            <div class="post-text">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br> Praesentium nam odio iste blanditiis illo vero accusantium veritatis doloribus eligendi! <br> <br> Officiis explicabo consequatur repudiandae omnis repellendus officia obcaecati soluta, neque a assumenda aperiam? Rerum quam suscipit delectus. <br> <br> Dolorem quis minus recusandae aperiam consequatur nostrum sunt ipsum? Vel fuga neque ut reiciendis laboriosam modi, odio ullam praesentium explicabo ratione quas alias delectus animi earum. At non nihil harum possimus odio provident, ad qui reprehenderit eveniet, iusto dicta corrupti esse, veniam voluptatem perferendis. 
               <br> <br> <br></p>

               <p class="to-show-scrollbar">
                  To Show ScrollBar <br>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, aut magni at facilis sequi culpa aspernatur qui alias, id consequatur molestias pariatur impedit recusandae tempore voluptas assumenda odit doloremque optio explicabo debitis maiores soluta ipsa? Facilis sapiente nostrum harum ipsum at distinctio tempore cum! Architecto labore totam, sequi deleniti corporis, ex delectus velit iusto aut, ratione culpa iste eius voluptatem aliquid. Voluptatibus aliquid, necessitatibus numquam totam ipsum rem reiciendis id voluptates doloribus vitae ut quam iure aut alias, temporibus itaque fuga nesciunt placeat est, accusantium sapiente veritatis autem explicabo? Architecto, illo laboriosam aperiam eum tenetur quidem cupiditate iusto exercitationem beatae praesentium earum aut? Adipisci nobis sed atque ipsam dolor molestias? Ad amet est sapiente similique doloribus porro, iste suscipit, praesentium non doloremque dolorum dignissimos, temporibus expedita inventore maxime magnam ratione dicta nam impedit officia corrupti. Officiis, eaque voluptate laborum est ipsam libero. Quos impedit omnis reprehenderit facere quod aliquid enim?
               </p>
            </div>

            <hr>

            <div class="post-comments">
               <p class="comment-title">Comments</p>

               <div class="comment">
                  <img src="../images/user_1.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">John Doe</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>

               <div class="comment">
                  <img src="../images/user_2.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">Leyla Selim</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>

               <div class="comment">
                  <img src="../images/user_3.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">Leyla Selim</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>

               <div class="comment">
                  <img src="../images/user_1.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">Leyla Selim</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>

               <div class="comment">
                  <img src="../images/user_2.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">Leyla Selim</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>

               <div class="comment">
                  <img src="../images/user_3.png" alt="comment profile">
                  <div class="user-comment">
                     <p class="name">Leyla Selim</p>
                     <p class="comm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt delectus ipsum facilis totam est cumque. </p>
                  </div>
               </div>
            </div>
         </div>


         
      </div>
   </div>
</template>

<script>
export default{
   props: ['ShowPopup']
}
</script>

<style lang="scss">
@import "../assets/popup_style.scss"
</style>