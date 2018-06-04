<template>
  <div class="font-sans leading-normal transition">
    <NavbarMobile v-show="mobileMenu" @close="mobileMenu = false"/>
    <Navbar @toggleMobileMenu="toggleMobileMenu"/>
    <Hero/>
    <About/>
    <OurWork/>
    <Stats/>
    <Team/>
    <!-- <Testimonials/> -->
    <FooterPage/>
    <ContactModal/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import NavbarMobile from '~/components/NavbarMobile.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import FooterPage from '~/components/FooterPage.vue'
import OurWork from '~/components/OurWork.vue'
import Stats from '~/components/Stats.vue'
import Team from '~/components/Team.vue'
import ContactModal from '~/components/ContactModal.vue'
// import Testimonials from '~/components/Testimonials.vue'

export default {
  data() {
    return {
      mobileMenu: false,
    }
  },
  mounted() {
    document.querySelector('body').classList.add('transition')
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu
      document.querySelector('body').classList.toggle('translate-overflow')
    }
  },
  components: {
    ContactModal  ,
    Navbar,
    NavbarMobile,
    Hero,
    About,
    Stats,
    FooterPage,
    Team,
    // Testimonials,
    OurWork
  }
}
</script>
