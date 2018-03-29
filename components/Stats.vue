<template>
    <div id="stats" class="p-8 bg-orange text-orange-lighter">
        <div class="container mx-auto">
            <div class="flex text-center">
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">2673  <Cutlery class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Almuerzos</p>
                </div>
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">58 <Gauge class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">A la semana</p>
                </div>
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">65  <People class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Participantes</p>
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