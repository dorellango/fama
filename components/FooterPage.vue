<template>
  <div class="bg-grey-darkest p-8 text-grey-dark">
    <div class="container mx-auto md:flex items-center">
        <div class="flex-1 mb-8 md:mb-0">
            <div class="flex items-center mb-2">
                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
                <p class="text-grey font-mono text-xl ml-2">
                    +569 73792498
                </p>
            </div>
            <p class="text-spaced is-3">Fundacion Ama &copy; <strong>2018</strong></p>
            <div class="text-sm mt-2">
                <a @click.prevent="$modal.show('donations')" class="mr-4 text-grey-dark hover:text-orange cursor-pointer">Donaciones</a>
                <a @click.prevent="$modal.show('contact')" class="mr-4 text-grey-dark hover:text-orange cursor-pointer">Contacto</a>
            </div>
        </div>
        <div class="flex-1 mb-8 md:mb-0">
            <div class="flex items-center justify-start md:justify-center">
                <Spot class="text-grey mr-4 h-12 w-12 fill-current" />
                <p class="is-3">
                    <span class="block">Ven a visitarnos!</span>
                    Revisa de <a @click="$modal.show('address')" class="text-orange cursor-pointer hover:text-orange-light">como llegar.</a>
                </p>
            </div>
        </div>
        <div class="flex-1">
            <div class="md:flex items-center justify-center">
                <p class="text-sm md:mr-4 mb-4 md:mb-0">Síguenos en:</p>
                <a href="https://web.facebook.com/fundacionama.servir" target="_blank" class="text-grey hover:text-orange"><Facebook class="fill-current mr-4 h-8 w-8"/></a>
                <a href="https://m.youtube.com/channel/UCaxDxlWYvsVtnPm7FAnppbQ" target="_blank" class="text-grey hover:text-orange"><Youtube class="fill-current mr-4 h-8 w-8"/></a>
                <a href="https://www.instagram.com/ama_fundacion/" target="_blank" class="text-grey hover:text-orange"><Instagram class="fill-current mr-4 h-8 w-8"/></a>
                <a href="https://mobile.twitter.com/ama_fundacion" target="_blank" class="text-grey hover:text-orange"><svg class="fill-current mr-4 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310"><path d="M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z"/></svg></a>
            </div>
        </div>
    </div>
    <p class="mt-6 text-grey-dark tracking-wide text-xs text-center border-t border-dashed border-grey-darker pt-6">
        Designed by <a href="http://wwww.dorellango.cl" class="text-orange" target="_blank">@dorellango</a>
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
    <modal name="donations" height="auto" :adaptive="true">
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
