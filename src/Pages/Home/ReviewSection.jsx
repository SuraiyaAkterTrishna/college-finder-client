import ReviewCard from "./ReviewCard";
import { useReviews } from "../../hooks/useReviews";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";


const ReviewSection = () => {
    const [reviews] = useReviews();
  return (
    <div className="w-full p-4">

      <div className="mx-auto text-center md:max-w-xl lg:max-w-2xl">
        <h3 className="mb-6 font-bold text-2xl md:text-4xl lg:text-7xl">Testimonials</h3>
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
        Hear from our students and parents about their experiences with our college booking service. Their stories and feedback reflect the quality and reliability of our services.
        </p>
      </div>

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {reviews.map((review) => (
          <SwiperSlide key={review?._id}><ReviewCard review={review} /></SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default ReviewSection;
