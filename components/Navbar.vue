<template>
  <div :class="['navbar', this.scrolled ? 'shadow bg-grey-darkest' : '']">
      <div class="container flex items-center h-24">
        <div class="flex-1">
          <img class="h-16 w-auto" src="~/static/logo.png" alt="Logo">
        </div>
        <ul class="list-reset flex">
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#about')">About</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#our-work')">Work</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#stats')">Stats</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#team')">Team</a></li>
          <li><a href="" class="bg-orange hover:bg-orange-light py-3 px-6 text-white rounded-full"> Contact Us</a></li>
        </ul>
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
  @import '~assets/sass/variables'
  .navbar
    // background-color: white
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 1000
    transition: background-color .3s ease 

</style>
