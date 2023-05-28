import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../../assets/home/slide1.jpg"
import slide2 from "../../../../assets/home/slide2.jpg"
import slide3 from "../../../../assets/home/slide3.jpg"
import slide4 from "../../../../assets/home/slide4.jpg"
import slide5 from "../../../../assets/home/slide5.jpg"
import SectionTitle from "../../../SectionTitle/SectionTitle";
const Category = () => {
  return (

   <section>
    <SectionTitle
    subHeading={'From 11:00AM to 10:00PM'}
    heading={'Order Online'}
    ></SectionTitle>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={slide1} alt="" />
        <h2 className="text-4xl uppercase -mt-12 text-white font-bold font-mono text-center">Salad</h2></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" />
        <h2 className="text-4xl uppercase -mt-12 text-white font-bold font-mono text-center">Pizza</h2></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" />
        <h2 className="text-4xl uppercase -mt-12 text-white font-bold font-mono text-center">Sup</h2></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" />
        <h2 className="text-4xl uppercase -mt-12 text-white font-bold font-mono text-center">Pastry</h2></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" /> <h2 className="text-4xl uppercase -mt-12 text-white font-bold font-mono text-center">salad2</h2>
      </SwiperSlide>
    </Swiper>

   </section>
  );
};

export default Category;