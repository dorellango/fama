<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="sass">
  @import '~assets/sass/app.sass'

  h1, h2, h3, h4, h5
    color: $darker
    
  body
    font-family: 'Source Sans Pro', sans-serif
    line-height: 1.5
    color: $dark
    
  .container
      max-width: 1152px
      margin: 0 auto
      padding: 0 2rem
      +mobile
        padding: 0 1rem
  a
    text-decoration: none
</style>
