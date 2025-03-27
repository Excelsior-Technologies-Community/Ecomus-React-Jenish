import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const FeatureSection = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: <FaShippingFast className="w-9 h-6 mx-auto" />,
      title: "Free Shipping",
      desc: "Free Shipping over order $120",
    },
    {
      icon: <MdOutlinePayment className="w-9 h-6 mx-auto" />,
      title: "Flexible Payment",
      desc: "Pay with multiple Credit Cards",
    },
    {
      icon: <IoMdReturnLeft className="w-9 h-6 mx-auto" />,
      title: "14 Day Returns",
      desc: "Within 30 days for an exchange",
    },
    {
      icon: <BiSupport className="w-9 h-6 mx-auto" />,
      title: "Premium Support",
      desc: "Outstanding premium support",
    },
  ];

  return (
    <section className="py-5">
      <div className="container feature">
        {isTablet ? (
          // Tablet View (2-Column Grid)
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-lg text-center p-6">
                {feature.icon}
                <h6 className="mt-3">{feature.title}</h6>
                <span>{feature.desc}</span>
              </div>
            ))}
          </div>
        ) : (
          // Mobile & Laptop View (Swiper)
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-lg text-center p-6">
                  {feature.icon}
                  <h6 className="mt-3">{feature.title}</h6>
                  <span>{feature.desc}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
