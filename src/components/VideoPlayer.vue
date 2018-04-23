<template>
  <transition name='slide'>
    <iframe width="560"
            height="315"
            :src="fullSrc"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            style="margin-top:1rem"></iframe>
  </transition>
</template>

<script>
export default {
  props: ["src"],
  computed: {
    fullSrc: vm => `https://www.youtube.com/embed/${vm.src}`,
  },
  created() {
    console.log(this.src)
  },
}
</script>

