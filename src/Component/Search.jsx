import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = ({ open, onClose }) => {
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
              <div>
                <div className="flex">
                  <div style={{ width: "107px" }}>
                    <img
                      src="./src/assets/white-3.jpg"
                      alt="gh"
                      style={{ height: "137px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      alignContent: "start",
                    }}
                  >
                    <p style={{ fontSize: "20px" }}>Cotton jersey top</p>
                    <div className="flex gap-3">
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "line-through",
                        }}
                      >
                        $10.00
                      </span>
                      <span style={{ fontWeight: "bold", color: "red" }}>
                        $8.00
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex">
                  <div style={{ width: "107px" }}>
                    <img
                      src="./src/assets/white-2.jpg"
                      alt="gh"
                      style={{ height: "137px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      alignContent: "start",
                    }}
                  >
                    <p style={{ fontSize: "20px" }}>Mini Crossbody bag</p>
                    <div className="flex gap-3">
                      <span style={{ fontWeight: "bold" }}>$18.00</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex">
                  <div style={{ width: "107px" }}>
                    <img
                      src="./src/assets/white-3.jpg"
                      alt="gh"
                      style={{ height: "137px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "10px",
                      alignContent: "start",
                    }}
                  >
                    <p style={{ fontSize: "20px" }}>Cotton jersey top</p>
                    <div className="flex gap-3">
                      <span style={{ fontWeight: "bold" }}>$8.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Search;
