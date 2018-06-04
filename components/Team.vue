<template>
    <div id="team" class="bg-grey-lightest p-8">    
        <div class="container mx-auto">
            <h1 class="text-4xl text-grey-darker">Nuestro <span class="italic text-orange font-italic text-light">equipo</span></h1>
            <p class="text-xl text-grey-dark tracking-wide mb-8">¡Gente fantástica!</p>

            <div class="md:flex flex-wrap -mx-2">
                <div class="md:w-1/3" v-for="(member, index) in team" :key="index">
                    <div class="mx-2 my-4 bg-white shadow">
                        <img class="team-thumb min-w-full" :src="avatar(member.thumb)">
                        <div class="p-4">
                            <p class="text-bold text-grey-darker lg:text-lg font-bold" v-text="member.name"></p>
                            <span class="text-grey-dark sm:text-sm lg:text-md" v-text="member.role"></span>
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
        { name: 'Patricia Orellana', role: 'Presidenta', thumb: 'patricia_o.png' },
        { name: 'Claudia Carvajal', role: 'Tesorera', thumb: 'claudia_c.png' },
        { name: 'Stephens Iriarte', role: 'Vicepresidente', thumb: 'stephens_i.png' },
        { name: 'Jose Luis Aránguiz', role: 'Director', thumb: 'jose_l.png' },
        { name: 'Jean Pierre Sepúlveda', role: 'Fundador y Director Ejecutivo', thumb: 'jean_p.png' },
        { name: 'Heriberto Gomez', role: 'Fundador', thumb: 'heriberto_g.png' }
      ]
    }
  }, 
  methods: {
      avatar(thumb) {
          return thumb ? require(`../assets/${thumb}`) : 'http://via.placeholder.com/300x200';
        //   return thumb ? require('~/assets/' + thumb) : 
      }
  }
}
</script>

<style lang="sass">
    img.team-thumb
        filter: grayscale(60%)
</style>

