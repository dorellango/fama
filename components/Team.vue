<template>
  <div class="team">    
    <div class="container">
      <div class="is-section">
        <div class="mb4">
          <h1 class="title">Our Team</h1>
          <p class="subtitle">¡Fantastic People!</p>
        </div>

        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(member, index) in team" :key="index">
            <div class="card">
              <div class="card-image">
                <img src="http://via.placeholder.com/300x200" alt="">
              </div>
              <div class="card-content">
                <h3 v-text="member.name"></h3>
                <span v-text="member.role"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        { name: 'Patricia Orellana G.', role: 'Secretary & Founder' },
        { name: 'Patricia Orellana G.', role: 'Secretary & Founder' },
        { name: 'Patricia Orellana G.', role: 'Secretary & Founder' },
        { name: 'Patricia Orellana G.', role: 'Secretary & Founder' }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import 'assets/sass/variables'
  .team
    background-color: $lighter

</style>
