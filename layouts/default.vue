<template>
  <div>
    <Navbar/>
      <nuxt/>
    <FooterPage/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import FooterPage from '~/components/FooterPage.vue'

export default {
  components: {
    Navbar,
    FooterPage
  }
}
</script>


<style lang="sass">
  @import '~assets/sass/app.sass'

  body
    font-family: "Roboto", sans-serif
    
  .container
      max-width: 1152px
      margin: 0 auto
      padding: 0 1rem
</style>
