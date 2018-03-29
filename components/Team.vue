<template>
    <div id="team" class="bg-grey-lightest p-8">    
        <div class="container mx-auto">
            <h1 class="text-4xl text-grey-darker">Nuestro <span class="italic text-orange font-italic text-light">equipo</span></h1>
            <p class="text-xl text-grey-dark tracking-wide mb-8">¡Gente fantástica!</p>

            <div class="flex flex-wrap -mx-2">
                <div class="w-1/4" v-for="(member, index) in team" :key="index">
                    <div class="mx-2 my-4 bg-white shadow">
                        <img src="http://via.placeholder.com/300x200" alt="">
                        <div class="p-4">
                            <h3 class="text-bold text-grey-darker" v-text="member.name"></h3>
                            <span class="text-grey-dark" v-text="member.role"></span>
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
