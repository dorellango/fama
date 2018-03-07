<template>
  <div :class="['navbar', this.scrolled ? 'shadow bg-grey-darkest' : '']">
      <div class="container navbar__inner">
        <span class="navbar__brand logo">
          <img src="~/static/logo.png" alt="Logo">
        </span>
        <ul class="navbar__list">
          <li class="mr2"><a class="has-text-white" @click="scrollTo('#about')">About.</a></li>
          <li class="mr2"><a class="has-text-white" @click="scrollTo('#our-work')">Work</a></li>
          <li class="mr2"><a class="has-text-white" @click="scrollTo('#stats')">Stats</a></li>
          <li class="mr2"><a class="has-text-white" @click="scrollTo('#team')">Team</a></li>
          <li><a href="" class="btn btn-orange"> Contact <strong>Us</strong></a></li>
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
  .logo img
    height: 60px
    width: auto
  .navbar-scrolled
    background-color: $darkest
    box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.20)
  .navbar
    // background-color: white
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 1000
    transition: background-color .3s ease 
    .navbar__inner
      height: 80px
      display: flex
      align-items: center
      span.navbar__brand
        font-weight: bold
        font-size: 1.25rem
      ul.navbar__list
        flex-grow: 1
        display: flex
        justify-content: flex-end
        align: center

</style>
