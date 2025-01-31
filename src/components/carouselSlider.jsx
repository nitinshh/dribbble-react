import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";  
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import { useRef } from "react";

const cards = [
  {
    img: "https://th.bing.com/th/id/OIP.sP-OXHCbwpGSnnDpKMsn3AHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Mobile",
  },
  {
    img: "https://th.bing.com/th/id/OIP.MOXevhxUKyURN3bjN6TosQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Illustrations",
  },
  {
    img: "https://th.bing.com/th/id/OIP.AYBlcc4VDxsdguuPiX2i8wHaI4?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Animation",
  },
  {
    img: "https://th.bing.com/th/id/OIP.QaGjMMY9jCGN3OVcVuY3wwHaJ4?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Print",
  },
  {
    img: "https://th.bing.com/th/id/OIP.cio1IRy-DTnB3BP35z58DwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Web Design",
  },
  {
    img: "https://th.bing.com/th/id/OIP.SLzsmkWtQmfkL80SprZHPwHaMf?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Branding",
  },
  {
    img: "https://th.bing.com/th/id/OIP.QaGjMMY9jCGN3OVcVuY3wwHaJ4?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Print",
  },
  {
    img: "https://th.bing.com/th/id/OIP.cio1IRy-DTnB3BP35z58DwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Web Design",
  },
  {
    img: "https://th.bing.com/th/id/OIP.Jn2ILThvDXTrhTbQd9FilQHaE7?w=290&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Product Design",
  },
  {
    img: "https://ts2.mm.bing.net/th?id=OIP.a4HiiY58aEBJD8d2AciZGgHaEY&pid=15.1",
    name: "Typography",
  },
];

const CarouselSlider = () => {
  const swiperRef = useRef(null);
  let resumeTimeout = null;

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
    clearTimeout(resumeTimeout);
  };

  // Resume autoplay after .5 seconds
  const handleMouseLeave = () => {
    resumeTimeout = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, 500);
  };

  return (
    <div className="carousel-container">
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {[...cards].map((card, index) => (
          <SwiperSlide
            key={index}
            className="carousel-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={card.img} alt={card.name} />
            <p>{card.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
