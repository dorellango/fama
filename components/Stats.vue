<template>
    <div id="stats" class="p-8 bg-orange text-orange-lighter">
        <div class="container">
            <div class="flex text-center">
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">12000  <Cutlery class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Lorem, ipsum dolor.</p>
                </div>
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">275 <Gauge class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Fugit, quos quibusdam!</p>
                </div>
                <div class="flex-1">
                    <h3 class="text-4xl flex items-center justify-center text-orange-lightest">879  <People class="fill-current h-8 w-8 ml-2" /></h3>
                    <p class="text-lg tracking-wide">Rem, aliquam cumque.</p>
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