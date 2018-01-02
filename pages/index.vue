<template>
  <section class="wrapper">
    <Navbar/>
    <Hero/>
    <About/>
    <OurWork/>
    <Stats/>
    <Team/>
    <FooterPage/>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import FooterPage from '~/components/FooterPage.vue'
import OurWork from '~/components/OurWork.vue'
import Stats from '~/components/Stats.vue'
import Team from '~/components/Team.vue'

export default {
  components: {
    Navbar,
    Hero,
    About,
    Stats,
    FooterPage,
    Team,
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
