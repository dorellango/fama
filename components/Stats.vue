<template>
    <div id="stats" class="p-8 bg-orange text-orange-lighter">
        <div class="container mx-auto">
            <div class="md:flex text-center">
                <div class="flex-1 mb-4 md:mb-0">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">
                        <count-up :to="2673">
                            <span slot-scope="{}"></span>
                        </count-up>
                        <Cutlery class="fill-current h-8 w-8 ml-2" />
                    </h3>
                    <p class="text-lg tracking-wide">Almuerzos</p>
                </div>
                <div class="flex-1 mb-4 md:mb-0">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">
                    <count-up :to="58">
                        <span slot-scope="{}"></span>
                    </count-up>
                    <Gauge class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">A la semana</p>
                </div>
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">
                    <count-up :to="65">
                        <span slot-scope="{}"></span>
                    </count-up>
                    <People class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Participantes</p>
                </div>
            </div>
            <p class="tracking-wide mt-8 text-sm italic text-center">* Estadísticas de nuestro comedor.</p>
        </div>
    </div>
</template>

<script>
import Cutlery from '~/assets/cutlery.svg'
import Gauge from '~/assets/gauge.svg'
import People from '~/assets/people.svg'
  import CountUp from './CountUp.vue'

export default {
  components: {
    CountUp,
    Cutlery,
    Gauge,
    People
  }
}
</script>