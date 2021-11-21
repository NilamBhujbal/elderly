import bootstrap from 'bootstrap/dist/js/bootstrap'

export default {
  mounted () {
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel)
    console.log(carousel)
  }
}
