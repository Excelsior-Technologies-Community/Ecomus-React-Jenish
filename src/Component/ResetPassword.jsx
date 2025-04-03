import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function ResetPassword({ onclose }) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1>Reset Your Password</h1>
          <button onClick={onclose}>
            <IoMdClose />
          </button>
        </div>
        <div>
          <p>
            Sign up for early sales access plus tailored new arriavals, trends{" "}
            and promotions . to opt out, click unsubscribe in our emails
          </p>
          <div class="w-full">
            <form class="bg-white pt-8 pb-8 mb-4">
              <div class="mb-6">
                <input
                  class="appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <Link
                  onClick={onclose}
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  Cancel
                </Link>
              </div>

              <div class="flex items-center justify-between mt-5">
                <button
                  class="bg-black hover:bg-blue-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick="#"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
