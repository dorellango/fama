<template>
  <div class="modal is-active" id="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: ['show']
}
</script>

<style lang="sass">
  @import '~assets/sass/mixins'
  @import '~assets/sass/variables'

  span.close--modal
    position: absolute
    top: 0
    right: 0
</style>


