<template>
  <div class="footer">
    <div class="container">
      <div class="footer--inner">
        <!-- <Tree class="footer-bg"/> -->
        <div class="level">
          <div class="level-left">
            <div>
              <p class="is-title is-2 mb1 has-text-light">+569 456 9456</p>
              <p class="text-spaced is-3 has-text-grey">Fundacion Ama &copy; <strong>2018</strong></p>
              <div class="has-text-dark">
                <a class="mr1">Donate</a>
                <a class="mr1">Term and Conditions</a>
                <a>Legal</a> 
              </div>
             
              <div class="mt2 level">
                <div class="level-left">
                  <span class="is-small">Follow us on: </span>
                </div>
                <div class="level-item">
                  <div>
                    <Instagram class="icon has-text-grey mr1"/>
                    <Facebook class="icon has-text-grey mr1"/>
                    <Youtube class="icon has-text-grey mr1"/>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="level-item">
            <div class="level">
              <Tree class="icon is-large mr1 has-text-grey"/>
              <p class="is-3"> ¿Do you want to help?
              <br>Apply <span class="has-text-orange">here</span></p>
            </div>
          </div>
          <div class="level-item">
            <div class="level">
              <Spot class="icon is-large mr1 has-text-grey"/>
              <p class="is-3"> See us in action :D
              <br>Come and visit us <span class="has-text-orange">here</span></p>
            </div>
          </div>
        </div>


        <p class="mt2 has-text-dark text-spaced has-text-center is-small by">
          Designed by <span class="has-text-orange">@dorellango</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from '~/assets/facebook.svg'
import Instagram from '~/assets/instagram.svg'
import Youtube from '~/assets/youtube.svg'
import Spot from '~/assets/spot.svg'
import Tree from '~/assets/tree.svg'

export default {
  components: {
    Facebook,
    Youtube,
    Instagram,
    Tree,
    Spot
  }
}
</script>


<style lang="sass">
  @import 'assets/sass/_variables.sass'

  .footer
    background-color: $darkest
  .footer--inner
    overflow: hidden
    padding: 4rem 0
  .by
    border-top: 1px dashed $darker
    padding-top: 1.5rem
</style>

