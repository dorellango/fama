<template>
  <div id="our-work">
    <div class="container">
      <Fists class="our-work-bg"/>
      <div class="is-section">
        <div class="columns">
          <div class="column is-half">
            <p class="title has-text-dark">Lo que <span class="is-italic has-text-orange text-light">hacemos</span></p>
            <p class="subtitle">Pilares de nuestra labor</p>
          </div>
          <div class="column">
            <ul>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Charity class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Acoger</h3>
                   <p>Nuestra meta es generar lazos a través de diversas actividades como el "Lugar de Encuentro", nombre que se le da a los comedores abiertos, donde buscamos acercarnos a la comunidad más vulnerable del sector para realizar entregas de: mercadería, vestuario y diversos tipos de ayuda sociales. Esto nos permite conocer a cada una de las personas y pasar a la segunda fase: “En Todo Tempo”, que es visitar a los seleccionados, ya sea en la calle o en una vivienda, y de esta manera afianzar más la relación.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <Protection class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Articular</h3>
                   <p>Generar un cambio en las personas a través del trabajo en equipo con otras instituciones y, posteriormente, con centros para rehabilitar a aquellos que acepten dar el paso de recibir ayuda profesional para acabar con sus adicciones al consumo de alcohol, drogas y otras sustancias.</p> 
                  </div>
                </div>
              </li>
              <li class="content">
                <div class="media">
                  <div class="media-left">
                    <House class="icon is-large has-text-orange"/>
                  </div>
                  <div class="media-content">
                   <h3 class="has-text-dark text-bold">Empoderar.</h3>
                   <p> impulsado por el amor de Cristo, a través del que buscamos generar lazos y cambios en las personas que padecen alguna adicción, para que encuentren nuevas oportunidades de salir adelante. Por lo que nos manifestamos como esa mano amiga a quienes se sienten solos en medio de esta sociedad, en ser ese apoyo que los acompaña y apoya en el proceso de reinserción, y en caminar juntos hasta verlos restaurados y renovados.</p> 
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
  @import '~assets/sass/_variables.sass'
  #our-work
    color: $grey
    overflow: hidden
    .container
      position: relative
    .our-work-bg
      fill: $lighter
      width: 350px
      height: 350px
      position: absolute
      bottom: 0
      left: 0
      z-index: -1
</style>
