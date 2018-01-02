<template>
  <section class="wrapper">
    <Navbar/>
    <Hero/>
    <About/>
    <OurWork/>
    <FooterPage/>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import FooterPage from '~/components/FooterPage.vue'
import OurWork from '~/components/OurWork.vue'

export default {
  components: {
    Navbar,
    Hero,
    About,
    FooterPage,
    OurWork
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/_variables.sass'

  body
    color: $dark
  
  h1, h2, h3, h4, h5
    color: $darker
</style>
