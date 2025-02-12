import Navbar from '../common/navbar'
import CarouselSlider from '../common/carouselSlider'
import Footer from '../common/footer'
import PrivacyPolicy from '../components/privacypolicy/privacypolicy'


function about() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <CarouselSlider />
      <Footer />
    </>
  )
}

export default about