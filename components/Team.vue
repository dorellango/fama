<template>
  <div id="team" class="bg-grey-lightest">    
    <div class="container">
      <div class="is-section">
        <div class="mb4">
          <h1 class="text-4xl">Nuestro <span class="italic has-text-orange">equipo</span></h1>
          <p class="text-xl text-grey tracking-wide">¡Gente fantástica!</p>
        </div>

        <div class="flex flex-wrap -mx-2">
          <div class="w-1/4" v-for="(member, index) in team" :key="index">
            <div class="mx-2 my-4 bg-white shadow">
              <div class="">
                <img src="http://via.placeholder.com/300x200" alt="">
              </div>
              <div class="p-4">
                <h3 class="text-bold" v-text="member.name"></h3>
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
        { name: 'Patricia Orellana G.', role: 'Presidenta' },
        { name: 'Claudia Carvajal M.', role: 'Tesorera' },
        { name: 'Stephens Iriarte M..', role: 'Vicepresidente' },
        { name: 'Jose Luis Aránguiz O.', role: 'Director' },
        { name: 'Jean Pierre Sepúlveda N.', role: 'Fundador y Director Ejecutivo' },
        { name: 'Heriberto Gomez V.', role: 'Fundador' }
      ]
    }
  }
}
</script>
