import React, { useEffect, useState } from "react";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
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
            {["Help", "About Us", "Sign Up for Email"].map((section, index) => (
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
                        Sign up for exclusive offers, new arrivals, events, and
                        more!
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
            ))}
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
    </>
  );
}

export default Footer;
