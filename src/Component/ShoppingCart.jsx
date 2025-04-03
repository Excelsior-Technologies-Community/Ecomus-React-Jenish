import { Slider } from "@mui/material";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Dialog, DialogTitle, IconButton } from "@mui/material";

function ShoppingCart({ open, onClose }) {
  return (
    <>
      <Dialog
        className="shoppingdialog"
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
            width: "400px",
          },
        }}
      >
        <DialogTitle sx={{ padding: "0px" }} className="px-4">
          <div className="font-bold mt-2">Shopping Cart</div>
          <IconButton
            onClick={onClose}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <FaTimes />
          </IconButton>
        </DialogTitle>
        <hr />
        <div className="px-4">
          <Slider
            defaultValue={70}
            aria-label="Default"
            valueLabelDisplay="auto"
            className="shopping-custom-slider"
          />
          <p style={{ marginBottom: "0px" }}>
            Buy <span className=" font-bold">$75.00</span> more to enjoy
            <span className=" font-bold">Free Shipping</span>
          </p>
        </div>
        <hr />
        <div className=" overflow-y-auto">
          <div className="flex flex-row px-4">
            <img src="src/assets/white-2.jpg" alt="fgj" className="w-[20%]" />
            <div
              className=""
              style={{ marginLeft: "20px", alignContent: "center" }}
            >
              <h6>T-Shirt</h6>
              <h6>Light gray</h6>
              <h6 className="font-bold">$25.00</h6>
              <div className="flex items-center">
                <div className="flex items-center gap-4 bg-[#F2F2F2] p-2 rounded">
                  <button>
                    <FaMinus />
                  </button>
                  <span>1</span>
                  <button>
                    <FaPlus />
                  </button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row px-4 mt-4">
            <img src="src/assets/white-2.jpg" alt="fgj" className="w-[20%]" />
            <div
              className=""
              style={{ marginLeft: "20px", alignContent: "center" }}
            >
              <h6>T-Shirt</h6>
              <h6>Light gray</h6>
              <h6 className="font-bold">$25.00</h6>
              <div className="flex items-center">
                <div className="flex items-center gap-4 bg-[#F2F2F2] p-2 rounded">
                  <button>
                    <FaMinus />
                  </button>
                  <span>1</span>
                  <button>
                    <FaPlus />
                  </button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="grid grid-cols-3 bg-[#F2F2F2] p-2 justify-items-center">
            <div className="bg-white p-3 w-[80px] justify-items-center">
              <FaRegEdit className="w-5 h-5" />
            </div>
            <div className="bg-white p-3 w-[80px] justify-items-center">
              <CiGift className="w-5 h-5" />
            </div>
            <div className="bg-white p-3 w-[80px] justify-items-center">
              <MdOutlineLocalShipping className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-between mt-4">
            <h5>Subtotal</h5>
            <h5>$49.99 USD</h5>
          </div>
          <div>
            <p style={{ marginBottom: "0px" }}>
              Taxes and <span className=" font-bold">Shipping </span>
              calculated at checkout
            </p>
          </div>
        </div>
        <hr />
        <div className="px-4">
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label for="html">
            I agree with the <Link>terms and conditions</Link>
          </label>
        </div>
        <div className="px-4">
          <div className="mt-3">
            <button
              className=" border border-black p-2 w-full"
              style={{ borderRadius: "4px" }}
            >
              View Cart
            </button>
          </div>
          <div className="mt-3">
            <button
              className="w-full bg-black text-white p-2"
              style={{ borderRadius: "4px" }}
            >
              Check Out
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ShoppingCart;
