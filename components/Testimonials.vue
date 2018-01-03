<template>
  <div id="testimonials">
    <div class="container">
      <div class="is-section">
          <div class="columns is-centered">
            <div class="column is-half">
              <div v-for="(testimonial, index) in testimonials" :key="index" v-show="index === current">
                <Quote class="icon is-large has-text-orange mr1"/>
                <div class="has-text-center">
                  <h2 class="is-2 text-bold" v-text="testimonial.name"></h2>
                  <p class="is-3" v-text="testimonial.body"></p>
                  <small class="text-spaced is-uppercase has-text-grey" v-text="testimonial.misc"></small>
                </div>
              </div>
            </div>
            <!-- arrows -->
            <div class="column is-2">
              <div class="has-text-right is-1" style="align-items: center; justify-content: flex-end; display: flex; height: 100%">
                <span @click="previus">&larr;</span>
                <span @click="next" class="has-text-orange">&rarr;</span>
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
      testimonials: [
        { name: 'Obi-Wan', body: 'If you define yourself by the power to take life, the desire to dominate, to possess…then you have nothing.', misc: 'Star Wars Rebels, T3.' },
        { name: 'Master Yoda', body: 'You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.', misc: 'Star Wars V.' },
        { name: 'Kylo Ren', body: 'Let the past die. Kill it if you have to. That is the only way to become what you were meant to be.', misc: 'Star Wars VIII, The Last Jedi' }
      ]
    }
  },
  components: {
    Quote
  },
  methods: {
    next () {
      this.current !== (this.testimonials.length - 1) ? this.current++ : this.current = 0
    },
    previus () {
      this.current !== 0 ? this.current-- : this.current = (this.testimonials.length - 1)
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'

  #testimonials
    background-color: $light

</style>

