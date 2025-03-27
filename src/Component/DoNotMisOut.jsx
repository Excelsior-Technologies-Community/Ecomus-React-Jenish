import React from "react";
import { Dialog, DialogContent, IconButton, TextField } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoNotMisOut = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        maxWidth: "1040px",
        justifySelf: "center",
      }}
    >
      <div>
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <FaTimes />
        </IconButton>
        <img
          src="./src/assets/banner-newleter.jpg"
          alt=""
          className="h-[231px] w-[531px]"
        />
      </div>
      <DialogContent sx={{ justifyItems: "center", textAlign: "center" }}>
        <div>
          <h1>Don't mis out</h1>
          <p>Be the first one to get new product at early bird prices.</p>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="dense"
            variant="outlined"
            name="email"
          />
          <button className="bg-black text-white p-2 w-full mt-4">
            Keep me updated
          </button>
          <Link className="text-black" style={{ marginTop: "10px" }}>
            Not Interested
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoNotMisOut;
