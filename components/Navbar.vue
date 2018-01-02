<template>
  <div class="navbar">
      <div class="container navbar__inner">
        <span class="navbar__brand">
          Fundacion Ama
        </span>
        <ul class="navbar__list">
          <li class="mr1">Lorem.</li>
          <li class="mr1">Quo?</li>
          <li class="mr1">Atque.</li>
          <li class="mr1"><a href="" class="btn btn-p">Action!</a></li>
        </ul>
      </div>
    </div>  
</template>

<style lang="sass">
  .navbar
    background-color: yellow
    position: fixed
    top: 0
    left: 0
    width: 100%
    .navbar__inner
      height: 60px
      display: flex
      align-items: center
      span.navbar__brand
        font-weight: bold
        font-size: 1.25rem
      ul.navbar__list
        flex-grow: 1
        display: flex
        justify-content: flex-end
        align: center

</style>
