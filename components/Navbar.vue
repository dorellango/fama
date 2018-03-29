<template>
  <div :class="['navbar px-6 animated bounceInDown z-10', this.scrolled ? 'shadow bg-grey-darkest' : '']">
      <div class="container mx-auto flex items-center h-24">
        <div class="flex-1">
          <img class="h-24 w-auto" src="~/static/logo-nav.png" alt="Logo">
        </div>
        <ul class="list-reset flex">
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#about')">Nosotros</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#our-work')">Trabajo</a></li>
          <li class="mr-6"><a class="text-white hover:text-orange" href="#" @click="scrollTo('#team')">Equipo</a></li>
          <li><a @click="$modal.show('contact')" class="bg-orange hover:bg-orange-light py-3 px-6 text-white rounded-full font-bold cursor-pointer"> Contacto</a></li>
        </ul>
      </div>
      <modal name="contact" height="auto">
      <div>
        <div class="bg-orange px-4 py-6 flex items-center">
            <i class="fas fa-phone -alt fill-current text-orange-lightest text-4xl mr-4 animated pulse infinite"></i>
            <div class="flex-1">
                <h2 class="text-orange-lightest">Contáctanos</h2>
            </div>
        </div>
        <div class="px-4 py-6 text-grey-dark">
          <p class="mb-2">Si conoces alguien que necesite ayuda o quieres hacer alguna donación, ponte en contacto con nosotros.</p>
          <h3 class="mb-2 text-grey-darker">Nuestros números</h3>
          <p class="mb-2 font-mono">+569 73792498</p>
          <p class="mb-2 font-mono">+569 44422139</p>
          <h3 class="mb-2 text-grey-darker">Correo</h3>
          <a href="mailto:contacto@fundacionama.cl" class="mb-2 text-orange hover:text-orange-light">contacto@fundacionama.cl</a>
        </div>
      </div>
    </modal>
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
