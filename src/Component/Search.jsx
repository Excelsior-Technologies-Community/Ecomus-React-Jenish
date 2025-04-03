import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Search = ({ open, onClose }) => {
  const products = [
    {
      id: 1,
      name: "Cotton jersey top",
      price: 8.0,
      originalPrice: 10.0,
      image: "./src/assets/white-3.jpg",
    },
    {
      id: 2,
      name: "Mini Crossbody bag",
      price: 18.0,
      image: "./src/assets/white-2.jpg",
    },
    {
      id: 3,
      name: "Cotton jersey top",
      price: 8.0,
      image: "./src/assets/white-3.jpg",
    },
  ];

  // search Data
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!open) {
      setSearchTerm("");
    }
  }, [open]);

  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            right: 0,
            top: 0,
            margin: 0,
            height: "100vh",
            maxHeight: "100vh",
          },
        }}
      >
        <div data-aos="fade-left">
          <DialogTitle className="py-4">
            Search Out Site
            <IconButton
              onClick={onClose}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <FaTimes />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="flex items-center border border-gray-300 px-3 py-2 w-96 gap-2">
              <IoMdSearch className="text-black w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full text-black"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <hr />
            <div
              className="h-[380px] overflow-y-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div>
                <div>
                  <h4>Quick Link</h4>
                </div>
                <div>
                  <ul style={{ paddingLeft: "0px", lineHeight: "35px" }}>
                    <li>
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3>Need Some inspiration?</h3>
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <div className="flex">
                      <div style={{ width: "107px" }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ height: "137px" }}
                        />
                      </div>
                      <div
                        style={{ marginLeft: "10px", alignContent: "start" }}
                      >
                        <p style={{ fontSize: "20px" }}>{product.name}</p>
                        <div className="flex gap-3">
                          {product.originalPrice && (
                            <span
                              style={{
                                fontWeight: "bold",
                                textDecoration: "line-through",
                              }}
                            >
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span style={{ fontWeight: "bold", color: "red" }}>
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default Search;
