<template>
  <div id="about" class="bg-grey-lighter">
    <div class="container mx-auto">
      <div class="md:flex p-8 md:flex-wrap lg:flex-no-wrap ">
        <div class="md:w-full lg:w-1/3 wow bounceInLeft">
          <p class="text-4xl font-bold text-grey-darker">Una <span class="text-orange  italic font-italic text-light">pequeña</span></p>
          <p class="text-xl text-grey-dark tracking-wide mb-8">historia sobre nosotros</p>
        </div>
        <div class="md:w-1/2 lg:w-1/3 pr-8 mb-6 md:mb-0">
            <p class="text-grey-dark mb-4 text-justify">Motivados por el amor a Cristo, la esperanza del evangelio y con la vocación de generar cambios positivos en la sociedad, nos dedicamos a ayudar al prójimo, brindando ayuda, orientación y apoyo a personas en condición de calle, vulnerables y en extrema pobreza, a través de la entrega de alimentación, vestuario, habilitación laboral, reinserción social y rehabilitación por consumo problemático de drogas o alcohol.</p>
            <div class="flex">
              <Quote class="text-orange fill-current w-12 h-12 mr-2"/>
              <blockquote class="text-grey-dark italic">Seamos una cadena de apoyo, solidaridad y fé.</blockquote>
            </div>
        </div>
        <div class="md:w-1/2 lg:w-1/3 text-right">
          <div class="cursor-pointer shadow-md relative" @click.prevent="$modal.show('hero')">
            <img class="align-bottom" src="~static/about.png" alt="About Us">
            <div class="opacity-50 absolute pin-x pin-y bg-orange flex items-center justify-center">
              <svg class="fill-current text-dark h-24 w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
import Quote from '~/assets/quote.svg'

export default {
  components: { Quote }
}
</script>

// <style lang="sass">
//   img.about-picture
//     position: relative
//     &:after
//       content: ''
//       position: absolute
//       top: 0
//       left: 0
//       right: 0
//       bottom: 0
//       background-color: orange;
//       opacity: .5
// </style>
