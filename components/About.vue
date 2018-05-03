<template>
  <div id="about" class="bg-grey-lighter">
    <div class="container mx-auto">
      <div class="md:flex p-8">
        <div class="md:w-1/3 wow bounceInLeft">
          <p class="text-4xl font-bold text-grey-darker">Una <span class="text-orange  italic font-italic text-light">pequeña</span></p>
          <p class="text-xl text-grey-dark tracking-wide mb-8">historia sobre nosotros</p>
        </div>
        <div class="md:w-1/3 pr-8 mb-6 md:mb-0">
            <p class="text-grey-dark mb-4 text-justify">Motivados por el amor a Cristo, la esperanza del evangelio y con la vocación de generar cambios positivos en la sociedad, nos dedicamos a ayudar al prójimo, brindando ayuda, orientación y apoyo a personas en condición de calle, vulnerables y en extrema pobreza, a través de la entrega de alimentación, vestuario, habilitación laboral, reinserción social y rehabilitación por consumo problemático de drogas o alcohol.</p>
            <div class="flex">
              <Quote class="text-orange fill-current w-12 h-12 mr-2"/>
              <blockquote class="text-grey-dark italic">Seamos una cadena de apoyo, solidaridad y fé.</blockquote>
            </div>
        </div>
        <div class="md:w-1/3 text-right">
          <a href="#" @click.prevent="$modal.show('hero')">
            <img class="shadow-md opacity-75" src="~static/about.png" alt="About Us">
          </a>
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
