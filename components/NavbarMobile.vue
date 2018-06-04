<template>
    <div class="bg-orange absolute pin-y z-20" style="width: 250px; left: 100%; padding-top: 96px">
        <ul class="list-reset text-center uppercase tracking-wide">
            <li><a class="text-orange-lightest hover:text-white hover:hunderline py-4 block border-t border-orange-light cursor-pointer" @click="scrollTo('#about')">Nosotros</a></li>
            <li><a class="text-orange-lightest hover:text-white hover:hunderline py-4 block border-t border-orange-light cursor-pointer" @click="scrollTo('#our-work')">Trabajo</a></li>
            <li><a class="text-orange-lightest hover:text-white hover:hunderline py-4 block border-t border-orange-light cursor-pointer" @click="scrollTo('#team')">Equipo</a></li>
            <li><a @click="contactPage" class="text-orange-lightest hover:text-white hover:hunderline py-4 block border-t border-orange-light cursor-pointer"> Contacto</a></li>
        </ul>
    </div>
</template>
<script>
import jump from 'jump.js'

export default {
  methods: {
    scrollTo (target) {
        this.$emit('close');
        document.querySelector('body').classList.remove('translate-overflow')
        jump(target,{
        offset: -80 // navbar height
      })
    },
    contactPage() {
        this.$emit('close');
        document.querySelector('body').classList.remove('translate-overflow')
        this.$modal.show('contact');
    }
  }
}
</script>

