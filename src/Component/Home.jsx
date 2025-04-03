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
import { FaAngleRight, FaShippingFast } from "react-icons/fa";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { IoMdReturnLeft, IoIosHeartEmpty } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
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
import ShoppingCart from "./ShoppingCart";
import Popper from "@mui/material/Popper";

function Home() {
  // categories api call
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // bestseller api call
  const [bestseller, setbestseller] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bestseller")
      .then((res) => res.json())
      .then((data) => setbestseller(data))
      .catch((err) => console.error("Error loading bestseller:", err));
  }, []);

  // Happy Clients api call
  const [client, setclient] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/happyclient")
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
  const [isShoppingCart, setIsShoppingCart] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpenCartDetails = (product) => {
    setSelectedProduct(product);
    setIsViewDetails(true);
  };
  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

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
                              onClick={() => setIsShoppingCart(true)}
                            />
                            <IoIosHeartEmpty className="bestsellericons hidden sm:inline" />
                            <MdCompareArrows
                              className="bestsellericons hidden sm:inline"
                              onClick={() => setIsMisOut(true)}
                            />
                            <MdOutlineRemoveRedEye
                              className="bestsellericons"
                              onClick={() => handleOpenCartDetails(seller)}
                            />
                          </button>
                          <div className="w-[262px] justify-items-center bestsellerdatatext">
                            <p>{seller.sizes}</p>
                          </div>
                        </div>
                      </div>

                      <ShoppingCart
                        open={isShoppingCart}
                        onClose={() => setIsShoppingCart(false)}
                      />
                      <CartDetails
                        open={isCartDetails}
                        onClose={() => setIsCartDetails(false)}
                      />
                      <ViewDetails
                        open={isViewDetails}
                        onClose={() => setIsViewDetails(false)}
                        product={selectedProduct}
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
                <div>
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
                    onClick={handleClick}
                  />
                  <Popper open={open} anchorEl={anchorEl} placement="top">
                    <div
                      className="p-2 flex items-center gap-3 shadow-md"
                      style={{ backgroundColor: "white", color: "black" }}
                      onMouseLeave={() => setAnchorEl(null)}
                    >
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
                        <MdOutlineRemoveRedEye
                          className="w-9 h-9 p-1"
                          // onClick={() => setIsCartDetails(true)}
                        />
                      </div>
                    </div>
                  </Popper>
                </div>
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
      </div>
    </>
  );
}

export default Home;
