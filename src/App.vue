<template>
  <div class="app-page">
    <LeftNav />

    <PersonCard />

  </div>
  
</template>



<script>
import LeftNav from './components/LeftNav.vue'
import PersonCard from './components/PersonCard.vue'

export default{
  name: 'App',
  components: {
    LeftNav,
    PersonCard,
  },

}



</script>



<style lang="scss">
@import "assets/main_style.scss";
</style>
