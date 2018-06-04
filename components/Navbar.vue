<template>
  <div :class="['navbar px-6 animated bounceInDown z-10', this.scrolled ? 'shadow bg-grey-darkest' : '']">
      <div class="container mx-auto flex items-center h-24">
        <div class="flex-1 flex-no-shrink">
          <img class="h-24 w-auto hidden md:block" src="~/static/logo-nav.png" alt="Logo">
          <img class="h-16 w-auto block md:hidden" src="~/static/logo.png" alt="Logo">
        </div>
        <!-- Links -->
        <ul class="list-reset hidden md:flex">
          <li class="mr-6"><a class="text-white hover:text-orange cursor-pointer" @click="scrollTo('#about')">Nosotros</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange cursor-pointer" @click="scrollTo('#our-work')">Trabajo</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange cursor-pointer" @click="scrollTo('#team')">Equipo</a></li>
          <li><a @click="$modal.show('contact')" class="bg-orange hover:bg-orange-light py-3 px-6 text-white rounded-full font-bold cursor-pointer"> Contacto</a></li>
        </ul>
        <!-- Mobile -->
        <div class="md:hidden">
          <svg @click="$emit('toggleMobileMenu')" class="fill-current w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </div>
      </div>
    </div>    
</template>
<script>
import Smartphone from 'assets/smartphone.svg'
import jump from 'jump.js'

export default {
  data () {
    return {
      scrolled: false
    }
  },
  components: { Smartphone },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    scrollTo (target) {
      jump(target, {
        offset: -80 // navbar height
      })
    }
  }
}
</script>

<style lang="sass">
  .navbar
    // background-color: white
    position: fixed
    top: 0
    left: 0
    width: 100%
    transition: background-color .3s ease 

</style>
