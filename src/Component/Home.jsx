import React, { useEffect, useRef, useState } from "react";
import s1 from "../../src/assets/fashion-slideshow-01.jpg";
import s2 from "../../src/assets/fashion-slideshow-02.jpg";
import s3 from "../../src/assets/fashion-slideshow-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaShippingFast,
} from "react-icons/fa";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import { FaStar, FaXTwitter } from "react-icons/fa6";
import { IoMdReturnLeft, IoIosHeartEmpty } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { AiOutlineTikTok } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import {
  MdCompareArrows,
  MdOutlineRemoveRedEye,
  MdOutlinePayment,
} from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import AllCollection from "./AllCollection";
import CartDetails from "./CartDetails";
import ViewDetails from "./ViewDetails";
import DoNotMisOut from "./DoNotMisOut";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "@mui/material";

function Home() {
  // categories api call
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // bestseller api call
  const [bestseller, setbestseller] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bestseller")
      .then((res) => res.json())
      .then((data) => setbestseller(data))
      .catch((err) => console.error("Error loading bestseller:", err));
  }, []);

  // Happy Clients api call
  const [client, setclient] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/happyclient")
      .then((res) => res.json())
      .then((data) => setclient(data))
      .catch((err) => console.error("Error loading client:", err));
  }, []);

  // best seller
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? bestseller : bestseller.slice(0, 4);

  // Swiper button
  const categorySwiperRef = useRef(null);
  const clientSwiperRef = useRef(null);

  // Category Swiper Handlers
  const handleCategoryPrev = () => {
    if (categorySwiperRef.current) categorySwiperRef.current.slidePrev();
  };
  const handleCategoryNext = () => {
    if (categorySwiperRef.current) categorySwiperRef.current.slideNext();
  };

  // Client Swiper Handlers
  const handleClientPrev = () => {
    if (clientSwiperRef.current) clientSwiperRef.current.slidePrev();
  };
  const handleClientNext = () => {
    if (clientSwiperRef.current) clientSwiperRef.current.slideNext();
  };
  // brand image data
  const brandImages = [
    "/src/assets/brand-01.png",
    "/src/assets/brand-02.png",
    "/src/assets/brand-03.png",
    "/src/assets/brand-04.png",
    "/src/assets/brand-05.png",
    "/src/assets/brand-06.png",
  ];

  // shop gram image
  const shopgram = [
    "./src/assets/gallery-7.jpg",
    "./src/assets/gallery-3.jpg",
    "./src/assets/gallery-5.jpg",
    "./src/assets/gallery-8.jpg",
    "./src/assets/gallery-6.jpg",
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllCollection, setIsAllCollection] = useState(false);
  const [isCartDetails, setIsCartDetails] = useState(false);
  const [isViewDetails, setIsViewDetails] = useState(false);
  const [isMisOut, setIsMisOut] = useState(false);

  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="">
          <div className="herosection">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper pt-[60px]"
            >
              <SwiperSlide>
                <div className="heroswap1">
                  <div className="w-full">
                    <img src={s1} alt="sloder1" className="relative" />
                    <div className="herowrapcontent absolute bottom-40 left-28 text-start">
                      <h1 className="text-5xl">Glomourous Glam</h1>
                      <p>From Casual to formal, we've got you covered</p>
                      <button className="bg-black hover:bg-blue-700 text-white py-2 px-4 flex">
                        Shop Collection
                        <span>
                          <FaAngleRight className="btnicons text-white" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="heroswap2">
                  <div className="w-full">
                    <img src={s2} alt="sloder1" className="relative" />
                    <div className="herowrapcontent absolute bottom-40 left-28 text-start">
                      <h1 className="text-5xl">Simple Style</h1>
                      <p>From Casual to formal, we've got you covered</p>
                      <button className="bg-black hover:bg-blue-700 text-white py-2 px-4 flex">
                        Shop Collection
                        <span>
                          <FaAngleRight className="btnicons text-white" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="heroswap3">
                  <div className="w-full">
                    <img src={s3} alt="sloder1" className="relative" />
                    <div className="herowrapcontent absolute bottom-40 left-28 text-start">
                      <h1 className="text-5xl">Discreet Style</h1>
                      <p>From Casual to formal, we've got you covered</p>
                      <button className="bg-black hover:bg-blue-700 text-white py-2 px-4 flex">
                        Shop Collection
                        <span>
                          <FaAngleRight className="btnicons text-white" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Modal */}
            {/* <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={customModalStyles}
            >
              <ShoppingCart onClose={() => setIsModalOpen(false)} />
            </Modal> */}
          </div>
        </div>

        {/* Discounts  */}
        <section className="py-5">
          <div>
            <div className="discount bg-[#FCFFB3]">
              <ul>
                <li>
                  <span>Spring Clearance Event: Save Up to 70%</span>
                </li>
                <li>
                  <span>Spring Clearance Event: Save Up to 70%</span>
                </li>
                <li>
                  <span>Spring Clearance Event: Save Up to 70%</span>
                </li>
                <li>
                  <span>Spring Clearance Event: Save Up to 70%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTIONS  */}
        <section className="py-5">
          <div className="categories relative container" data-aos="fade-up">
            {/* Header with Buttons */}
            <div className="categoriescontent grid grid-cols-1 gap-2 mb-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <button
                    onClick={handleCategoryPrev}
                    className="text-3xl cursor-pointer"
                  >
                    <CiCircleChevLeft className="w-9 h-9" />
                  </button>
                  <button
                    onClick={handleCategoryNext}
                    className="text-3xl cursor-pointer ml-2"
                  >
                    <CiCircleChevRight className="w-9 h-9" />
                  </button>
                </div>
                <h2 className="text-lg font-semibold">SHOP BY CATEGORIES</h2>
              </div>
            </div>

            {/* Swiper Section */}
            <div className="categoriesswiper grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <Swiper
                onSwiper={(swiper) => (categorySwiperRef.current = swiper)}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                modules={[Navigation]}
                className="mySwiper col-span-3"
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={index} className="SwiperSlide">
                    <div>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    <div className="categoriesbutton absolute bottom-6 left-3">
                      <button className="px-4 bg-white w-auto p-2 flex items-center justify-center shadow-md">
                        {category.categories}
                        {/* Hover Section */}
                        <span className="ml-2">
                          <GoArrowUpRight />
                        </span>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swipercard col-span-1 w-full min-w-0 rounded shadow-md border p-5 h-[300px]">
                <h1>Discover all new items</h1>
                <button onClick={() => setIsAllCollection(true)}>
                  <GoArrowUpRight className="w-12 h-12 border rounded-full p-2" />
                </button>
              </div>
            </div>
          </div>
          <AllCollection
            open={isAllCollection}
            onClose={() => setIsAllCollection(false)}
          />
        </section>

        {/* BEST SELLER SECTIONS  */}
        <section className="py-5">
          <div
            className="container bestseller mx-auto max-w-7xl px-4"
            data-aos="fade-up"
          >
            <div className="bestsellercontent text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">Best Seller</h1>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Shop the latest styles: stay ahead of the curve with our newest
                arrivals
              </p>
            </div>

            {/* Card Section */}
            <div className="bestsellercard">
              <div className="bestsellerlist grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {visibleCards.map((seller, index) => (
                  <>
                    <div key={index} className="product-card transition-all">
                      <img
                        src={seller.image}
                        alt={seller.name}
                        className="w-full object-cover rounded-lg"
                      />
                      <h6 className="text-lg font-semibold mt-2">
                        {seller.name}
                      </h6>
                      <span className="text-gray-700 text-sm">
                        {seller.price}
                      </span>
                      {/* <span>
                        Discount ends on:{" "}
                        {new Date(
                          seller.discount_timer.end_date
                        ).toLocaleString()}
                      </span> */}

                      {/* Hover Section */}
                      <div className="bestsellerhidedata">
                        <div className="block justify-items-center">
                          <button className="flex gap-2">
                            <BsCartCheck
                              className="bestsellericons"
                              onClick={() => setIsCartDetails(true)}
                            />
                            <IoIosHeartEmpty className="bestsellericons hidden sm:inline" />
                            <MdCompareArrows
                              className="bestsellericons hidden sm:inline"
                              onClick={() => setIsMisOut(true)}
                            />
                            <MdOutlineRemoveRedEye
                              className="bestsellericons"
                              onClick={() => setIsViewDetails(true)}
                            />
                          </button>
                          <div className="w-[262px] justify-items-center bestsellerdatatext">
                            <p>{seller.sizes}</p>
                          </div>
                        </div>
                      </div>

                      <CartDetails
                        open={isCartDetails}
                        onClose={() => setIsCartDetails(false)}
                      />
                      <ViewDetails
                        open={isViewDetails}
                        onClose={() => setIsViewDetails(false)}
                      />
                      <DoNotMisOut
                        open={isMisOut}
                        onClose={() => setIsMisOut(false)}
                      />
                    </div>
                  </>
                ))}
              </div>

              {/* Show More / Show Less Button */}
              {bestseller.length > 4 && (
                <div className=" mt-4 flex justify-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-4 py-2 border border-black text-sm font-medium hover:bg-gray-100 transition-all"
                  >
                    {showAll ? "Show Less" : "Load More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Shop the look */}
        <section className="py-5">
          <div className="container loopsection text-center" data-aos="fade-up">
            <h1>Shop the look</h1>
            <p>
              Inspire and let yourself be inspired, from one unique fashion to
              another.
            </p>

            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <img
                  src="./src/assets/lookbook-3.jpg"
                  alt="Lookbook 3"
                  className="w-full h-auto"
                />
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    <div className="bg-white text-black p-2 flex items-center gap-3">
                      <img
                        src="./src/assets/brown.jpg"
                        alt="Product"
                        className="w-12 h-16"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          Ribbed modal T-shirt
                        </span>
                        <span className="text-md font-bold">$20.00</span>
                      </div>
                      <div className="bg-[#ebebeb] rounded-full">
                        <MdOutlineRemoveRedEye className="w-9 h-9 p-1" />
                      </div>
                    </div>
                  }
                >
                  <GoDotFill
                    className="absolute cursor-pointer"
                    style={{
                      left: "48%",
                      top: "65%",
                      transform: "translate(-50%, -50%)",
                      background: "white",
                      borderRadius: "100%",
                      padding: "4px",
                    }}
                  />
                </Tooltip>
                <GoDotFill
                  className="absolute"
                  style={{
                    left: "62%",
                    top: "87%",
                    transform: "translate(-50%, -50%)",
                    background: "white",
                    borderRadius: "100%",
                    padding: "4px",
                  }}
                />
              </SwiperSlide>

              <SwiperSlide className="relative">
                <img
                  src="./src/assets/lookbook-4.jpg"
                  alt="Lookbook 4"
                  className="w-full h-auto"
                />
                <PiDotOutlineFill
                  className="absolute"
                  style={{
                    left: "60%",
                    top: "20%",
                    width: "20px",
                    height: "20px",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Happy clients */}
        <section className="py-5">
          <div className="container happyclients" data-aos="fade-up">
            <div className="happyclientscontent">
              <h1>Happy Clients</h1>
              <p>Hear what they say about us</p>
            </div>
            <div>
              <div className="happyclientsbutton relative">
                {/* Left Button */}
                <button
                  onClick={handleClientPrev}
                  className="z-10 p-2 rounded-full happyleftbutton"
                >
                  <CiCircleChevLeft className="buttoniconleft w-8 h-8 absolute left-[-18px] top-[198px]" />
                </button>

                <Swiper
                  onSwiper={(swiper) => (clientSwiperRef.current = swiper)}
                  spaceBetween={30}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {client.map((review, index) => (
                    <SwiperSlide key={index}>
                      <div className="border-1 border-black rounded">
                        <div style={{ textAlign: "start", padding: "30px" }}>
                          {/* Stars */}
                          <div className="flex gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <FaStar key={i} className="text-orange-400" />
                            ))}
                          </div>
                          <h6 className="font-extrabold">{review.title}</h6>
                          <p>"{review.text}"</p>
                          <h6 className="font-bold">{review.name}</h6>
                          <span>{review.location}</span>
                          <hr />
                          <div className="flex">
                            <div style={{ width: "107px" }}>
                              <img
                                src={review.image}
                                alt={review.product}
                                style={{ height: "137px" }}
                              />
                            </div>
                            <div
                              style={{
                                marginLeft: "10px",
                                alignContent: "center",
                              }}
                            >
                              <p style={{ fontSize: "20px" }}>
                                {review.product}
                              </p>
                              <span style={{ fontWeight: "bold" }}>
                                ${review.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Right Button */}
                <button
                  onClick={handleClientNext}
                  className="z-10 p-2 rounded-full happyrightbutton"
                >
                  <CiCircleChevRight className="buttoniconright w-8 h-8 absolute bottom-[50%] right-[-18px]" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Image Sections  */}
        <section className="py-5">
          <div className="container " data-aos="fade-up">
            <Swiper
              loop={true}
              navigation={false}
              spaceBetween={10}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 5, spaceBetween: 15 },
                1280: { slidesPerView: 6, spaceBetween: 20 },
              }}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {brandImages.map((src, index) => (
                <SwiperSlide key={index} className="border border-black">
                  <img
                    src={src}
                    alt={`Brand ${index + 1}`}
                    className="w-full h-auto"
                    style={{}}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Shop Gram */}
        <section className="py-5">
          <div className="container shopgram" data-aos="fade-up">
            <div className="shopgramcontent">
              <h1>Shop Gram</h1>
              <p>
                Inspire and let yourself be inspited, from one unique fashion to
                another.
              </p>
            </div>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              loop={true}
              navigation={false}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 5, spaceBetween: 15 },
              }}
            >
              {shopgram.map((src, index) => (
                <SwiperSlide key={index} className="relative shopgramimage">
                  <img
                    src={src}
                    alt={`Brand ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 w-10 h-10 flex items-center justify-center shadow-lg rounded-full"
                    style={{ borderRadius: "100%" }}
                    onClick={() => setIsCartDetails(true)}
                  >
                    <BsCartCheck className="w-6 h-6 text-gray-800" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Feature Section  */}
        <section className="py-5">
          <div className="container feature" data-aos="fade-up">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="border rounded-lg text-center"
                  style={{ padding: "30px" }}
                >
                  <FaShippingFast className="w-9 h-6 mx-auto" />
                  <h6 className="mt-3">Free Shipping</h6>
                  <span>Free Shipping over order $120</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="border rounded-lg text-center"
                  style={{ padding: "30px" }}
                >
                  <MdOutlinePayment className="w-9 h-6 mx-auto" />
                  <h6 className="mt-3">Flexible Payment</h6>
                  <span>Pay with multiple Credit Cards</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="border rounded-lg text-center"
                  style={{ padding: "30px" }}
                >
                  <IoMdReturnLeft className="w-9 h-6 mx-auto" />
                  <h6 className="mt-3">14 Day Returns</h6>
                  <span>Within 30 days for an exchange</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="border rounded-lg text-center"
                  style={{ padding: "30px" }}
                >
                  <BiSupport className="w-9 h-6 mx-auto" />
                  <h6 className="mt-3">Premium Support</h6>
                  <span>Outstanding premium support</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Footer Sections  */}
        <section className="py-5 bg-gray-100">
          <div className="container px-4 mx-auto" data-aos="fade-up">
            <hr />
            <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-14">
              {/* Company Info - No col-span on tablet view */}
              <div className="lg:col-span-2">
                <img src="./src/assets/logo.svg" alt="Logo" />
                <div className="mt-4">
                  <p>
                    Address: 1234 Fashion Street, Suite 567, New York, NY 10001
                  </p>
                  <p>Email: info@fashionshop.com</p>
                  <p>Phone: (212) 555-1234</p>
                  <Link
                    to="https://maps.windows.com/?form=WNAMSH&entity=local_vdpid%3A5487505297524129794&collection=point.40.713047_-74.007233_New%20York%2C%20New%20York%2C%20United%20States"
                    className="flex items-center text-blue-500 mt-2"
                    target="_blank"
                  >
                    Get directions <LuArrowUpRight />
                  </Link>
                  <div className="flex gap-3 mt-4">
                    <FaFacebookF className="rounded-full border border-black w-6 h-6 p-1" />
                    <FaXTwitter className="rounded-full border border-black w-6 h-6 p-1" />
                    <FaInstagram className="rounded-full border border-black w-6 h-6 p-1" />
                    <AiOutlineTikTok className="rounded-full border border-black w-6 h-6 p-1" />
                    <FaPinterest className="rounded-full border border-black w-6 h-6 p-1" />
                  </div>
                </div>
              </div>

              {/* Accordion Sections */}
              {["Help", "About Us", "Sign Up for Email"].map(
                (section, index) => (
                  <div
                    key={index}
                    className={` md:border-none ${
                      section === "Sign Up for Email" ? "lg:col-span-2" : ""
                    }`}
                  >
                    {/* Heading always visible in tablet and laptop views */}
                    <h4 className="hidden md:block text-lg font-semibold mb-2">
                      {section}
                    </h4>

                    {/* Accordion Button - Only for Mobile */}
                    <button
                      className="w-full flex justify-between items-center md:hidden py-2 text-lg font-semibold"
                      onClick={() => toggleSection(section)}
                    >
                      {section}
                      <span className="text-xl">
                        {openSection === section ? "−" : "+"}
                      </span>
                    </button>

                    {/* Content - Show normally on larger screens, accordion on mobile */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSection === section ? "max-h-96" : "max-h-0"
                      } md:max-h-full md:block`}
                    >
                      {section === "Help" && (
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            <Link to="">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="">Return & Exchange</Link>
                          </li>
                          <li>
                            <Link to="">Shipping</Link>
                          </li>
                          <li>
                            <Link to="">Terms & Conditions</Link>
                          </li>
                          <li>
                            <Link to="">FAQ's</Link>
                          </li>
                          <li>
                            <Link to="">Compare</Link>
                          </li>
                          <li>
                            <Link to="">My Wishlist</Link>
                          </li>
                        </ul>
                      )}
                      {section === "About Us" && (
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            <Link to="">Our Story</Link>
                          </li>
                          <li>
                            <Link to="">Visit Our Store</Link>
                          </li>
                          <li>
                            <Link to="">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="">Account</Link>
                          </li>
                        </ul>
                      )}
                      {section === "Sign Up for Email" && (
                        <div className="space-y-4">
                          <p>
                            Sign up for exclusive offers, new arrivals, events,
                            and more!
                          </p>
                          <div className="relative max-w-xs">
                            <input
                              type="email"
                              className="w-full border p-2 rounded-md"
                              placeholder="Enter Your Email..."
                            />
                            <button className="absolute right-2 top-1.5 bg-black text-white px-3 py-1 rounded-md flex items-center">
                              Subscribe <LuArrowUpRight className="ml-1" />
                            </button>
                          </div>

                          {/* Currency and Language Dropdowns */}
                          <div className="dropdown-center flex flex-col md:flex-row md:items-center gap-4 mt-4">
                            {/* Currency Selector */}
                            <div className="relative">
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <img
                                  src="/src/assets/us.svg"
                                  alt="Flag"
                                  className="w-4 h-4 mr-2"
                                />
                                USD
                              </button>
                              <ul className="dropdown-menu absolute bg-white shadow-md rounded-md mt-2 w-full">
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    USD
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    EUR
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    GBP
                                  </a>
                                </li>
                              </ul>
                            </div>

                            {/* Language Selector */}
                            <div className="relative">
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                              >
                                English
                              </button>
                              <ul className="dropdown-menu absolute bg-white shadow-md rounded-md mt-2 w-full">
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    English
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    Español
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-4 py-2 block"
                                    href="#"
                                  >
                                    Français
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            <hr className="my-4" />
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
              <span>© 2024 Ecomus Store. All Rights Reserved.</span>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <img src="./src/assets/visa.png" alt="Visa" />
                <img src="./src/assets/img-1.png" alt="Payment Method" />
                <img src="./src/assets/img-2.png" alt="Payment Method" />
                <img src="./src/assets/img-3.png" alt="Payment Method" />
                <img src="./src/assets/img-4.png" alt="Payment Method" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
