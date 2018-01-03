<template>
  <section class="wrapper">
    <Navbar/>
    <Hero/>
    <About/>
    <OurWork/>
    <Stats/>
    <Team/>
    <Testimonials/>
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
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    Navbar,
    Hero,
    About,
    Stats,
    FooterPage,
    Team,
    Testimonials,
    OurWork
  }
}
</script>
