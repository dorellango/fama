<template>
  <div class="hero">

    <Modal v-if="modal" @close="modal = false">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4jbjz0KxNx0" allowfullscreen></iframe>
      </div>
    </Modal>

    <div class="hero--image"></div>
    <div class="container hero__inner">
      <div class="hero--content">
        <div class="level">
          <div class="level-item">
            <div class="text-sh" style="max-width: 400px">
                <p class="subtitle has-text-lightest text-light">.Ex, architecto?</p>
                <p class="title has-text-white">Lorem ipsum 
                <span class="has-text-orange-light text-light is-italic">dolor sit</span> amet consectetur.</p>
            </div>
          </div>
          <div class="level-item">
            <div style="text-align: right">
              <a @click="modal = true" class="pointer">
                <Play class="icon is-large-x has-text-orange-light scalable"/></a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Play from '~/assets/play-outline.svg'
import Modal from '~/components/Modal.vue'

export default {
  data () {
    return {
      modal: false
    }
  },
  components: {
    Play,
    Modal
  }
}
</script>

<style lang="sass">
  .scalable
    transition: transform .3s ease
    &:hover
      transform: scale(1.05)
  .hero
    height: 100vh
    position: relative
    .hero__inner
      height: 100%
      display: flex
      align-items: center
      position: relative
      z-index: 10
      .hero--content
        width: 100%
    .hero--image
      background-image: url('~static/hero.jpeg')
      background-size: cover
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      filter: grayscale(100%)
</style>

