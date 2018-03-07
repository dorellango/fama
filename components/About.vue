<template>
  <div id="about">
    <div class="container">
      <div class="is-section">
        <div class="columns">
          <div class="column is-one-third">
            <p class="title">Let us <span class="has-text-orange text-light is-italic">tell you</span></p>
            <p class="subtitle">a short history about us</p>
          </div>
          <div class="column is-one-third">
            <div class="content">
              <p>Somos una organización sin fines de lucro, movida por el amor de Cristo y, destinada a ayudar, orientar, apoyar y colaborar a personas en condición de calle, vulnerables y en extrema pobreza, a través de la entrega de alimentación, vestuario, habilitación laboral, reinserción social y rehabilitación por consumo problemático de drogas o alcohol.</p>
              <p>Motivados por el amor a Cristo y la esperanza del evangelio, partimos con la vocación de generar cambios positivos en la sociedad, sumando esperanzas a las personas vulnerables, que se encuentran en situación de calle y de bajos recursos.</p>
              <div class="level">
                  <Quote class="has-text-orange icon" />
                <blockquote class="has-text-darker">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto!</blockquote>
              </div>
            </div>
          </div>
          <div class="column is-one-third" style="text-align: center">
            <img class="box-sh" src="http://via.placeholder.com/250x350" alt="About Us">
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

<style lang="sass">
  @import '~assets/sass/_variables.sass'
  #about
    background-color: $lighter
</style>
