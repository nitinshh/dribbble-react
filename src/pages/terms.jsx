import Navbar from '../common/navbar'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'
import Terms from '../components/terms/terms'


function about() {
  return (
    <>
      <Navbar />
      <Terms />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about