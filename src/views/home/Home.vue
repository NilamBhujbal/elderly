<template>
  <div class="home ">
    <Navigation />
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/navigation/Navigation.vue'
import Carousel from '@/components/carousel/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Carousel
  }
}
</script>
