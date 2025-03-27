import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { FaCircle, FaRegHeart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCompareArrows } from "react-icons/md";

const CartDetails = ({ open, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(0);

  const colors = [
    { color: "orange", name: "orange" },
    { color: "black", name: "black" },
    { color: "white", name: "white", border: "1px solid black" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        maxWidth: "520px",
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        margin: "auto",
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
      <DialogContent className="overflow-y-auto max-h-[100%] px-4">
        {/* Product Info */}
        <div className="flex flex-row items-center py-3 gap-3">
          <img
            src="src/assets/white-2.jpg"
            alt="product"
            className="w-[20%] sm:w-[15%] md:w-[20%]"
          />
          <div className="ml-4">
            <h6>Ribbed Tank Top</h6>
            <h6 className="font-bold">$18.00</h6>
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <div>
            <span>Color:</span>
            <span className="font-bold ml-1">{selectedColor}</span>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {colors.map(({ color, name, border }) => (
              <FaCircle
                key={name}
                onClick={() => setSelectedColor(name)}
                className="cursor-pointer"
                style={{
                  color,
                  border:
                    selectedColor === name
                      ? "1px solid #1f1f1f"
                      : border || "none",
                  borderRadius: "100%",
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
          <div className="flex gap-2 mt-2 flex-wrap">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer transition-all duration-200 ${
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
          <div className="bg-[#F2F2F2] text-white p-2 rounded-sm flex items-center justify-between w-full sm:w-40 md:w-48">
            <button
              onClick={() => setCount((prev) => Math.max(0, prev - 1))}
              className="bg-[#F2F2F2] text-black px-3 py-1 rounded-md font-bold"
            >
              -
            </button>
            <span className="text-xl font-semibold">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="bg-[#F2F2F2] text-black px-3 py-1 rounded-md font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 items-center mt-4">
          <button className="bg-black text-white p-2 w-full sm:w-[300px] rounded-sm">
            Add to cart - $18.00
          </button>
          <div className="flex gap-2">
            <div className="border border-black p-2 rounded-sm cursor-pointer">
              <FaRegHeart />
            </div>
            <div className="border border-black p-2 rounded-sm cursor-pointer">
              <MdCompareArrows />
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-4">
          <button className="flex items-center bg-[#fcc332] p-2 w-full justify-center rounded-md gap-1">
            Buy with <img src="./src/assets/paypal.png" alt="paypal" />
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <Link className="text-black" style={{ textDecoration: "none" }}>
            More payment options
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartDetails;
