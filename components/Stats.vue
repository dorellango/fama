<template>
  <div class="stats">
    <div class="container stats--inner">
      <div class="level">
        <div class="level-item">
          <div class="has-text-center">
            <h3 class="title">12000  <Cutlery class="icon is-medium" /></h3>
            <p class="subtitle">Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div class="level-item">
          <div class="has-text-center">
            <h3 class="title">275 <Gauge class="icon is-medium" /></h3>
            <p class="subtitle">Fugit, quos quibusdam!</p>
          </div>
        </div>
        <div class="level-item">
          <div class="has-text-center">
            <h3 class="title">879  <People class="icon is-medium" /></h3>
            <p class="subtitle">Rem, aliquam cumque.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cutlery from '~/assets/cutlery.svg'
import Gauge from '~/assets/gauge.svg'
import People from '~/assets/people.svg'

export default {
  components: {
    Cutlery,
    Gauge,
    People
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/variables'
  .stats
    background-color: $orange
    color: $orange-lighter
    .stats--inner
      padding: 3rem
    .title
      color: $orange-lightest
    .level-item svg
      fill: $orange-lightest

</style>
