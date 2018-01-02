<template>
  <div class="our-work">
    <div class="container">
      <div class="is-section">
        <div class="columns">
          <div class="column is-half">
            <p class="title">Our Work</p>
            <p class="subtitle">Pillars about our work</p>
          </div>
          <div class="column">
            <ul>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Charity class="icon is-large"/>
                  </div>
                  <div class="media-content">
                   <h3>Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ipsa, temporibus natus voluptates eius numquam labore quaerat eveniet necessitatibus totam officia beatae sequi consequuntur cum.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Protection class="icon is-large"/>
                  </div>
                  <div class="media-content">
                   <h3>Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ipsa, temporibus natus voluptates eius numquam labore quaerat eveniet necessitatibus totam officia beatae sequi consequuntur cum.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <House class="icon is-large"/>
                  </div>
                  <div class="media-content">
                   <h3>Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ipsa, temporibus natus voluptates eius numquam labore quaerat eveniet necessitatibus totam officia beatae sequi consequuntur cum.</p> 
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Charity from '~/assets/charity.svg'
import Protection from '~/assets/protection.svg'
import House from '~/assets/house.svg'

export default {
  components: {
    Charity,
    Protection,
    House
  }
}
</script>


<style lang="sass">
  @import '~assets/sass/_variables.sass'

  $our-work-main-color: $teal-dark
  .our-work 
    .media-left svg
      fill: $our-work-main-color
    .media-content h3
      color: $our-work-main-color
</style>
