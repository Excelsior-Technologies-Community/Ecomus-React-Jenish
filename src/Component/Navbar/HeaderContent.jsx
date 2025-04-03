import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function HeaderContent() {
  return (
    <>
      <div className="headercontent">
        <div className="container flex justify-between mt-3 m-8 bg-white mb-2.5 md:m-0">
          <div className="flex gap-3">
            <FaFacebookF className="mr-3 rounded-full bg-[antiquewhite] w-6 h-6 p-1" />
            <FaInstagram className="mr-3 rounded-full bg-[antiquewhite] w-6 h-6 p-1" />
            <FaLinkedinIn className="mr-3 rounded-full bg-[antiquewhite] w-6 h-6 p-1" />
            <FaXTwitter className="mr-3 rounded-full bg-[antiquewhite] w-6 h-6 p-1" />
          </div>
          <div className="headercontentspan">
            <span>
              Spring Fashion Sale
              <span className="underline relative headercontentspan1">
                Shop now
                <GoArrowUpRight className="absolute left-[70px] top-1.5" />
              </span>
            </span>
          </div>
          <div className="dropdown-center flex headercontentdropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src="/src/assets/us.svg" alt="" className=" w-3.5" />
              USD
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action two
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action three
                </a>
              </li>
            </ul>

            <div className="dropdown-center">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action two
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
