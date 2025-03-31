import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { FaCircle, FaRegHeart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCompareArrows } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const ViewDetails = ({ open, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = [
    { color: "orange", name: "orange" },
    { color: "black", name: "black" },
    { color: "white", name: "white", border: "1px solid black" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const [count, setCount] = useState(1);

  return (
    <Dialog
      className="viewdetailsdialog"
      open={open}
      onClose={onClose}
      maxWidth="lg"
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        maxWidth: "1040px",
        justifySelf: "center",
      }}
    >
      <DialogContent sx={{ height: "100vh", padding: 0 }}>
        <div className="grid grid-cols-2 h-full viewdetailsdialogcontent">
          {/* Left Side (Image) */}
          <div className="overflow-auto h-full">
            <img
              src="./src/assets/pink-1.jpg"
              alt="Product"
              className="w-full h-full "
            />
          </div>

          {/* Right Side (Content) */}
          <div
            className="overflow-auto h-full p-4"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
            }}
          >
            <DialogTitle>
              <IconButton
                onClick={onClose}
                style={{ position: "absolute", top: 10, right: 10 }}
              >
                <FaTimes />
              </IconButton>
            </DialogTitle>

            <div>
              <h3>Ribbed Tank Top</h3>
              <div className="flex gap-1 items-center mt-4 viewdetailsdialogbutton">
                <button
                  className="uppercase border-1 p-1 w-24"
                  style={{ borderRadius: "3px" }}
                >
                  Best Seller
                </button>
                {/* <BsLightningChargeFill /> */}
                <p className="mb-0 items-center">
                  Selling fast! 48 people have this in their carts.
                </p>
              </div>
              <h2 className="mt-3">$18.00</h2>
              <p className="mt-4">
                Do esse non non id nostrud consequat cillum. Labore do excepteur
                cupidatat enim excepteur laboris nisi.
              </p>

              {/* Color Selection */}
              <div className="mt-4">
                <div>
                  <span>Color:</span>
                  <span className="font-bold ml-1">{selectedColor}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {colors.map(({ color, name, border }) => (
                    <FaCircle
                      key={name}
                      onClick={() => setSelectedColor(name)}
                      style={{
                        color,
                        border:
                          selectedColor === name
                            ? "1px solid black"
                            : border || "none",
                        borderRadius: "100%",
                        cursor: "pointer",
                        padding: "3px",
                        width: "27px",
                        height: "27px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-4">
                <div>
                  <span>Size:</span>
                  <span className="font-bold ml-1">{selectedSize}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer transition-all duration-200 
                        ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "border border-gray-400"
                        }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mt-4">
                <p>Quantity</p>
                <div className="bg-[#F2F2F2] text-white p-2 rounded-sm flex items-center justify-between w-40 viewdetailsdialogquantity">
                  <button
                    onClick={() => setCount(Math.max(1, count - 1))}
                    className="bg-[#F2F2F2] text-black px-3 py-1 rounded-md font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{count}</span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="bg-[#F2F2F2] text-black px-3 py-1 rounded-md font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons (Add to Cart, Wishlist, Compare) */}
              <div className="flex gap-2 items-center mt-4 viewdetailsdialogcart">
                <button className="bg-black text-white p-2 w-[340px] rounded-sm">
                  Add to cart - $18.00
                </button>
                <div className="viewdetailsdialogicons flex gap-3">
                  <div className="border border-[#EDEDED] p-2 rounded-sm cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <div className="border border-[#EDEDED] p-2 rounded-sm cursor-pointer">
                    <MdCompareArrows />
                  </div>
                </div>
              </div>

              {/* PayPal & More Payment Options */}
              <div className="mt-4">
                <button className="flex items-center bg-[#fcc332] p-2 w-full justify-center rounded-md">
                  Buy with{" "}
                  <img
                    src="./src/assets/paypal.png"
                    alt="paypal"
                    className="ml-2"
                  />
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="#"
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  More payment options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetails;
