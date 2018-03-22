<template>
  <div id="testimonials">
    <div class="container">
      <div class="is-section">
          <div class="columns is-centered">
            <div class="column is-half">
              <transition-group
                enter-active-class="animated fadeIn">

                <div v-for="(quote, index) in quotes" :key="index" v-show="index === current" class="quote">
                  <Quote class="icon is-large has-text-orange-light"/>
                  <div class="has-text-center">
                    <h2 class="is-2 text-bold" v-text="quote.name"></h2>
                    <p class="is-3" v-text="quote.body"></p>
                    <small class="text-spaced is-uppercase has-text-grey" v-text="quote.misc"></small>
                  </div>
                </div>
              </transition-group>

            </div>
            <!-- arrows -->
            <div class="column is-2">
              <div class="has-text-right is-1" style="align-items: center; justify-content: flex-end; display: flex; height: 100%">
                <span @click="previus" class="has-text-orange pointer mr1">&larr;</span>
                <span @click="next" class="has-text-orange pointer">&rarr;</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '~/assets/quote.svg'

export default {
  data () {
    return {
      current: 0,
      quotes: [
        { name: 'Maximo Mardonez', body: 'Se siente la presencia de Dios.', misc: '(50 años)' },
        { name: 'Catalina Montecinos', body: 'Las personas son cariñosas y humildes.', misc: '(27 años)' },
        { name: 'Veronica Robles y Joel Cerda', body: 'El trato que se entrega no lo hace cualquiera si no esta la presencia de Dios.', misc: '(37 y 57 años)' },
        { name: 'Miguel Angel', body: 'Que todos los dias sean Domingos.', misc: '(49 años)' },
        { name: 'Cecilia Serrano', body: 'Hay recibimiento sin discriminacion, son respetuosos y se preocupan por uno, ustedes son distintos.', misc: '(49 años)' },
        { name: 'German Morales', body: 'Gracias a la ayuda de Dios y de todos los que estan aquí.', misc: '(55 años)' }
      ]
    }
  },
  components: {
    Quote
  },
  mounted () {
    setInterval(() => {
      this.next()
    }, 6000)
  },
  methods: {
    next () {
      this.current !== this.quotes.length - 1 ? this.current++ : this.current = 0
    },
    previus () {
      this.current !== 0 ? this.current-- : this.current = this.quotes.length - 1
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  #testimonials
    background-color: $light
    .quote
      position: relative
      z-index: 1
      svg
        position: absolute
        left: 0
        top: 1rem
        z-index: -1

</style>

