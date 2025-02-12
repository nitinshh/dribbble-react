import Navbar from '../common/navbar'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'
import Testimonials from '../components/testimonials/testimonials'


function about() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about