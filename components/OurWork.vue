<template>
  <div id="our-work">
    <div class="container">
      <Fists class="our-work-bg"/>
      <div class="is-section">
        <div class="columns">
          <div class="column is-half">
            <p class="title has-text-dark">Powerfull <span class="is-italic has-text-orange text-light">Work</span></p>
            <p class="subtitle">Pillars about our labor</p>
          </div>
          <div class="column">
            <ul>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Charity class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolore sed. Veniam repudiandae veritatis pariatur omnis, dicta iure aliquam.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Protection class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolore sed. Veniam repudiandae veritatis pariatur omnis, dicta iure aliquam.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <House class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Lorem ipsum dolor sit amet.</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolore sed. Veniam repudiandae veritatis pariatur omnis, dicta iure aliquam.</p> 
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
import Fists from '~/assets/fists.svg'

export default {
  components: {
    Charity,
    Protection,
    Fists,
    House
  }
}
</script>


<style lang="sass">
  @import '~assets/sass/_variables.sass'
  #our-work
    color: $grey
    overflow: hidden
    .container
      position: relative
    .our-work-bg
      fill: $lighter
      width: 350px
      height: 350px
      position: absolute
      bottom: 0
      left: 0
      z-index: -1
</style>
