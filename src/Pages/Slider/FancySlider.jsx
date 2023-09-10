import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation,Mousewheel, Keyboard } from 'swiper/modules';

import img1  from '../../img/flash-sale/1.webp'
import img2  from '../../img/flash-sale/2.webp'
import img3  from '../../img/flash-sale/3.webp'
import img4  from '../../img/flash-sale/4.webp'
import img5  from '../../img/flash-sale/5.webp'
import img6  from '../../img/flash-sale/6.png'




const FancySlider = () => {
    
    return (
        <div className="w-full">
            <Swiper
            slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation,Mousewheel, Keyboard]}
        className="mySwiper w-full rounded-3xl shadow-2xl"
      >
        <SwiperSlide><img className=' h-80 w-full' src={img1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img  className='h-80 w-full' src={img2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img  className='h-80 w-full' src={img3} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img  className='h-80 w-full' src={img4} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img  className='h-80 w-full' src={img5} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img  className='h-80 w-full' src={img6} alt="Slide 2" /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default FancySlider;