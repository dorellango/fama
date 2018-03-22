<template>
  <div class="bg-grey-darkest">
    <div class="container">
      <div class="p-12">
        <div class="flex">
          <div class="flex-1">

              <p class="text-grey text-2xl">+569 456 9456</p>
              <p class="text-spaced is-3 has-text-grey">Fundacion Ama &copy; <strong>2018</strong></p>
              <div class="text-grey-dark">
                <a class="mr-4">Donate</a>
                <a class="mr-4">Term and Conditions</a>
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
          <div class="flex-1">
            <div class="level">
              <Tree class="icon is-large mr1 has-text-grey"/>
              <p class="is-3"> ¿Do you want to help?
              <br>Apply <span class="has-text-orange">here</span></p>
            </div>
          </div>
          <div class="flex-1">
            <div class="level">
              <Spot class="icon is-large mr1 has-text-grey"/>
              <p class="is-3"> See us in action :D
              <br>Come and visit us <span class="text-orange">here</span></p>
            </div>
          </div>
        </div>


        <p class="mt-6 text-grey-dark tracking-wide text-xs text-center border-t border-dashed border-grey-darker pt-6">
          Designed by <span class="text-orange">@dorellango</span></p>
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

  .by
    border-top: 1px dashed $darker
    padding-top: 1.5rem
</style>

