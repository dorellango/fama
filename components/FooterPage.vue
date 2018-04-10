<template>
  <div class="bg-grey-darkest p-8 text-grey-dark">
    <div class="container mx-auto flex items-center">
        <div class="flex-1">
            <p class="text-grey font-mono text-xl mb-2">
                <i class="fas fa-phone"></i> +569 73792498
            </p>
            <p class="text-spaced is-3">Fundacion Ama &copy; <strong>2018</strong></p>
            <div class="text-sm mt-2">
                <a @click="$modal.show('donations')" class="mr-4 text-grey-dark hover:text-orange cursor-pointer">Donaciones</a>
                <a @click="$modal.show('contact')" class="mr-4 text-grey-dark hover:text-orange cursor-pointer">Contacto</a>
                <!-- More links -->
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
        <div class="flex-1">
            <div class="flex items-center justify-center">
                <p class="text-sm mr-4">Síguenos en:</p>
                <a href="" class="text-grey hover:text-orange"><Facebook class="fill-current mr-4 h-8 w-8"/></a>
                <a href="" class="text-grey hover:text-orange"><Youtube class="fill-current mr-4 h-8 w-8"/></a>
                <a href="" class="text-grey hover:text-orange"><Instagram class="fill-current mr-4 h-8 w-8"/></a>
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
    <modal name="donations" height="auto">
        <div>
            <!-- Heading -->
            <div class="bg-orange p-4 flex items-center">
                <i class="fas fa-hand-holding-usd fill-current text-orange-lightest text-4xl mr-4"></i>
                <div class="flex-1">
                    <h2 class="text-orange-lightest">Sumate</h2>
                    <p class="text-orange-lighter">Haz tu aporte a fundación AMA.</p>
                </div>
            </div>
            <div class="p-6">
                <p class="mb-6">Datos donaciones bancarias:</p>
                <p class="mb-2 text-lg">Banco de Chile</p>
                <p class="text-xl mb-4 font-bold">169-43072-03</p>
                <p class="mb-2">R.U.T Fundación Ama</p>
                <p class="text-xl mb-2 font-bold">65.159.677-7</p>

                <p class="mb-6 mt-6">Insumos, ropa u otros:</p>                
                <p class="mb-2">Ponte en contacto con nosotros u acercate a nuestra dirección en <span class="italic font-bold">Teniente Montt Salamanca #12265. La Pintana, Santiago.</span></p>
            </div>
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
