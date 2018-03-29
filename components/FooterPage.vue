<template>
  <div class="bg-grey-darkest p-8 text-grey-dark">
    <div class="container mx-auto flex items-center">
        <div class="flex-1">
            <p class="text-grey font-mono text-xl mb-2">
                <i class="fas fa-phone"></i> +569 73792498
            </p>
            <p class="text-spaced is-3">Fundacion Ama &copy; <strong>2018</strong></p>
            <div class="text-sm mt-2">
                <a href="#" class="mr-4 text-grey-dark hover:text-orange">Donaciones</a>
                <a href="#" class="mr-4 text-grey-dark hover:text-orange">Contacto</a>
                <a href="#" class="mr-4 text-grey-dark hover:text-orange">Team</a>
                <!-- More links -->
            </div>
        </div>
        <div class="flex-1">
            <div class="flex items-center justify-center">
                <Tree class="text-grey mr-4 h-12 w-12 fill-current" />
                <p class="is-3"> 
                    <span class="block">¿Quieres participar?</span>
                    Aplica <a class="text-orange">aquí.</a>
                </p>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex items-center justify-center">
                <Spot class="text-grey mr-4 h-12 w-12 fill-current" />
                <p class="is-3">
                    <span class="block">Ven a visitarnos!</span>
                    Revisa de <a @click="$modal.show('address')" class="text-orange cursor-pointer hover:text-orange-light">como llegar.</a>
                </p>
            </div>
        </div>
    </div>
    <p class="mt-6 text-grey-dark tracking-wide text-xs text-center border-t border-dashed border-grey-darker pt-6">
        Designed by <span class="text-orange">@dorellango</span>
    </p>
    <modal name="address" height="auto">
        <div>
            <!-- Heading -->
            <div class="bg-orange p-4 flex items-center">
                <i class="fas fa-map-marker-alt fill-current text-orange-lightest text-4xl mr-4"></i>
                <div class="flex-1">
                    <h2 class="text-orange-lightest">Ven a visitarnos</h2>
                    <p class="text-orange-lighter">Teniente Montt Salamanca #12265. La Pintana, Santiago.</p>
                </div>
            </div>
            <gmap-map
                :center="{
                            lat:-33.5757942, 
                            lng:-70.6575718
                    }"
                :zoom="17"
                map-type-id="terrain"
                style="width: 100%; height: 300px"
            >
                <gmap-marker
                    :position="{
                            lat:-33.5757942, 
                            lng:-70.6575718
                    }"
                    :clickable="true"
                    :draggable="true"
                ></gmap-marker>
            </gmap-map>
        </div>
    </modal>
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
