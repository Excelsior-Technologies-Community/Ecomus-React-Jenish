import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blackImage from "../../assets/logo.svg";
import { FaSearch, FaTimes, FaRegUser, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { LuArrowUpRight } from "react-icons/lu";
import Badge from "@mui/material/Badge";
import Register from "../Register";
import Login from "../Login";
import ForgetPassword from "../ForgetPassword";
import Search from "../Search";
import ShoppingCart from "../ShoppingCart";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    { title: "Menu", options: ["Option 1", "Option 2", "Option 3"] },
    { title: "Shop", options: ["Men", "Women", "Accessories"] },
    { title: "Product", options: ["New Arrivals", "Best Sellers", "Sale"] },
    { title: "Pages", options: ["About Us", "Contact", "FAQ"] },
    { title: "Blog", options: ["Latest News", "Trends", "Tips"] },
  ];

  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShoppingCart, setIsShoppingCart] = useState(false);

  const handleOpenLogin = () => {
    navigate("/login");
    setIsRegisterOpen(false);
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenRegister = () => {
    navigate("/register");
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsRegisterOpen(true);
  };

  const handleOpenForgotPassword = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(true);
    navigate("/forgetpassword");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="navbar mt-0 container">
        <div>
          <nav className="nav-container pt-3 z-2">
            <div className="logo">
              <img src={blackImage} alt="headerlogo" />
            </div>

            <div className={`menu ${menuOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <select name="cars" id="cars">
                    <option value="volvo">Menu</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li>
                  <select name="cars" id="cars">
                    <option value="volvo">Shop</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li>
                  <select name="cars" id="cars">
                    <option value="volvo">Product</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li>
                  <select name="cars" id="cars">
                    <option value="volvo">Pages</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li>
                  <select name="cars" id="cars">
                    <option value="volvo">Blog</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li>Buy now</li>
              </ul>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
              <img
                src="./src/assets/776658c2-445c-4c8e-ae48-6fa5d370d053.svg"
                alt=""
              />
            </div>
            <div
              className={`fixed inset-0 bg-white p-6 transition-transform duration-300 z-50 ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-71 text-3xl"
              >
                <FaTimes />
              </button>

              <div>
                <ul
                  className="space-y-4 mt-10 text-lg"
                  style={{
                    justifySelf: "center",
                    width: "80%",
                    paddingLeft: "0px",
                    marginTop: "58px",
                    maxHeight: "300px",
                    overflow: "scroll",
                  }}
                >
                  {menuItems.map((item, index) => (
                    <li key={index} className="border-b pb-4">
                      <button
                        onClick={() => toggleSubMenu(index)}
                        className="w-full flex justify-between items-center text-left font-medium"
                      >
                        {item.title}
                        <span className="text-xl">
                          {openSubMenu === index ? "-" : "+"}
                        </span>
                      </button>

                      {/* Submenu */}
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openSubMenu === index
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.options.map((option, i) => (
                          <li
                            key={i}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  <li></li>
                  <div>
                    <Link
                      to="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Buy Now
                    </Link>
                    <div className="flex mt-2 gap-2">
                      <button className=" flex items-center justify-center gap-2 bg-[#F2F2F2] p-2 w-[123px]">
                        <FaRegHeart />
                        Wishlist
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-[#F2F2F2] p-2 w-[123px]">
                        <FaSearch />
                        Search
                      </button>
                    </div>
                    <div className="mt-3">
                      <Link>Need Help ?</Link>
                    </div>
                    <div className=" mt-3">
                      <p>
                        Address: 1234 Fashion Street, Suite 567, New York, NY
                        10001
                      </p>
                      <p>Email: info@fashionshop.com</p>
                      <p>Phone: (212) 555-1234</p>
                      <Link
                        to="#"
                        className="flex items-center text-blue-500 mt-2"
                      >
                        Get directions <LuArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </ul>
                <div className=" px-4">
                  <button className="flex items-center gap-2 bg-[#F2F2F2] p-2 w-24 justify-center">
                    <FaRegUser />
                    Login
                  </button>
                  <hr />
                  <div className="dropdown-center grid grid-cols-2 md:flex-row md:items-center gap-4 mt-4">
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
                          src="https://cdn.shopify.com/static/images/flags/us.svg?width=16"
                          alt="Flag"
                          className="w-4 h-4 mr-2"
                        />
                        USD
                      </button>
                      <ul className="dropdown-menu absolute bg-white shadow-md rounded-md mt-2 w-full">
                        <li>
                          <a className="dropdown-item px-4 py-2 block" href="#">
                            USD
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item px-4 py-2 block" href="#">
                            EUR
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item px-4 py-2 block" href="#">
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
                          <a className="dropdown-item px-4 py-2 block" href="#">
                            English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item px-4 py-2 block" href="#">
                            Español
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item px-4 py-2 block" href="#">
                            Français
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="icons flex gap-4">
              <FaSearch
                className="searchicons"
                onClick={() => setIsSearchOpen(true)}
              />
              <button onClick={handleOpenLogin}>
                <FaRegUser className="usericons" />
              </button>

              {/* Modals */}
              <Login
                open={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onRegisterClick={handleOpenRegister}
                onForgotPasswordClick={handleOpenForgotPassword}
              />
              <Register
                open={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                onLoginClick={handleOpenLogin}
              />
              <ForgetPassword
                open={isForgotPasswordOpen}
                onClose={() => setIsForgotPasswordOpen(false)}
                onLoginOpen={handleOpenLogin}
              />
              <Search
                open={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
              />
              <ShoppingCart
                open={isShoppingCart}
                onClose={() => setIsShoppingCart(false)}
              />

              <Badge
                badgeContent={0}
                color="error"
                showZero
                className="hearticons"
              >
                <FaRegHeart color="action" />
              </Badge>
              <Badge
                badgeContent={0}
                color="error"
                showZero
                className="carticons"
                onClick={() => setIsShoppingCart(true)}
              >
                <TiShoppingCart color="action" />
              </Badge>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
