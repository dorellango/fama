<template>
    <!-- TODO -->
    <div id="our-work" class="p-8 overflow-hidden">
        <div class="container mx-auto relative">
            <Fists class="our-work-bg fill-current text-grey-lighter"/>
            <div class="md:flex">
                <div class="flex-1">
                    <p class="text-4xl text-grey-darker font-bold">Lo que <span class="text-orange italic font-italic text-light">hacemos</span></p>
                    <p class="text-xl text-grey-dark tracking-wide mb-8">Pilares de nuestra labor</p>
                </div>
                <div class="flex-1">
                    <ul class="list-reset text-grey-dark">
                        <li class="flex flex-col items-center md:flex-row mb-6">
                            <House class="flex-no-shrink h-10 w-10 fill-current text-orange mb-4 md:mb-0 md:mr-4"/>
                            <div class="flex flex-col items-center md:block">
                                <h3 class="text-grey-darker text-bold mb-2 md:mb-0">Acoger</h3>
                                <p class="text-justify md:text-left">A traves del amor buscamos generar lazos y acercarnos a la comunidad más vulnerable de nuestro entorno, por medio de diversas actividades y proyectos. </p> 
                            </div>
                        </li>
                        <li class="flex flex-col items-center md:flex-row mb-6">
                            <Charity class="flex-no-shrink h-10 w-10 fill-current text-orange mb-4 md:mb-0 md:mr-4"/>
                            <div class="flex flex-col items-center md:block">
                                <h3 class="text-grey-darker text-bold mb-2 md:mb-0">Articular</h3>
                                <p class="text-justify md:text-left">Gracias a los lazos generados, el trabajo de un equipo multiciplinario y la asociación con otras instituciones buscamos generar un cambio y rehabilitación en las personas.</p>
                            </div>
                        </li>
                        <li class="flex flex-col items-center md:flex-row">
                            <Protection class="flex-no-shrink h-10 w-10 fill-current text-orange mb-4 md:mb-0 md:mr-4"/>
                            <div class="flex flex-col items-center md:block">
                                <h3 class="text-grey-darker text-bold mb-2 md:mb-0">Empoderar</h3>
                                <p class="text-justify md:text-left">Comprometidos con un trabajo completo queremos acompañar hasta el final a cada persona y entregar las herramientas necesarias para la reinserción laboral y social.</p> 
                            </div>
                        </li>
                    </ul>
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
  #our-work
    .our-work-bg
      width: 350px
      height: 350px
      position: absolute
      bottom: 0
      left: 0
      z-index: -1
</style>
