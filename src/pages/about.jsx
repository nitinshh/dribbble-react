import Navbar from '../common/navbar'
import About from '../components/about/about'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'


function about() {
  return (
    <>
      <Navbar />
      <About />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about