import Navbar from '../common/navbar'
import CookiePolicy from '../components/cookiepolicy/cookiepolicy'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'


function about() {
  return (
    <>
      <Navbar />
      <CookiePolicy />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about