import Navbar from '../common/navbar'
import Banner from '../common/banner'
import Filter from '../common/filter'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'
import Home from '../components/home/home'


function about() {
  return (
    <>
      <Navbar />
      <Banner />
      <Filter />
      <Home />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about