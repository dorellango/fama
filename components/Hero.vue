<template>
  <div class="hero h-screen relative">
    <modal name="hero" width="800" height="369">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffundacionama.servir%2Fvideos%2F539110589757094%2F&autoplay=true&show_text=false&appId=834017066653711"
        width="800" height="369" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </modal>

    <div class="hero-bg"></div>
    <div class="container mx-auto h-full relative flex items-center justify-center px-6">
        <div class="flex max-w-lg items-center">
          <div class="text-white flex-1 animated bounceInLeft">
              <h3 class=" text-xl md:text-2xl font-normal text-shadow">Afuera están quienes nos necesitan</h3>
              <h1 class=" text-4xl md:text-5xl text-white text-shadow">Seamos una cadena de apoyo,
              <span class="text-orange font-italic italic text-shadow">solidaridad</span>, y fe.</h1>
              <a href="#" @click.prevent="$modal.show('donations')" class="text-xl bg-orange hover:bg-orange-light py-3 px-6 text-white rounded-full cursor-pointer mt-6 inline-block"> Haz tu aporte</a>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Play from '~/assets/play-outline.svg'

export default {
  components: {
    Play,
  }
}
</script>

<style lang="sass">
  .v--modal-overlay
    background: rgba(0,0,0,0.5)

  .scalable
    transition: transform .3s ease
    &:hover
      transform: scale(1.05)
  .hero-bg
    background-image: url('~static/hero.jpeg')
    background-size: cover
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    filter: grayscale(100%)
</style>

