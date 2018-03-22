<template>
  <div class="bg-grey-darkest p-12 text-grey-dark">
    <div class="container flex items-center">
        <div class="flex-1">
            <p class="text-grey font-mono text-xl">+569 456 9456</p>
            <p class="text-spaced is-3">Fundacion Ama &copy; <strong>2018</strong></p>
            <div class="text-sm mt-2">
                <a class="mr-4 hover:text-orange">Donaciones</a>
                <a class="mr-4 hover:text-orange">Contacto</a>
                <a class="mr-4 hover:text-orange">Team</a>
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
                    Revisa de <a class="text-orange">como llegar.</a>
                </p>
            </div>
        </div>
    </div>
    <p class="mt-6 text-grey-dark tracking-wide text-xs text-center border-t border-dashed border-grey-darker pt-6">
        Designed by <span class="text-orange">@dorellango</span>
    </p>
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
