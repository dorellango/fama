<template>
  <div :class="['navbar', this.scrolled ? 'navbar-scrolled' : '']">
      <div class="container navbar__inner">
        <span class="navbar__brand has-text-white">
          -- LOGO --
        </span>
        <ul class="navbar__list has-text-white">
          <li class="mr2">Lorem.</li>
          <li class="mr2">Quo?</li>
          <li class="mr2">Atque.</li>
          <li><a href="" class="btn btn-orange"> Contact <strong>Us</strong></a></li>
        </ul>
      </div>
    </div>  
</template>
<script>
import Smartphone from 'assets/smartphone.svg'

export default {
  data () {
    return {
      scrolled: null
    }
  },
  components: { Smartphone },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      console.log(window.scrollY > 0)
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'

  .navbar-scrolled
    background-color: $darkest
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.18)
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
