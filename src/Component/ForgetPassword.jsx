import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";

const ForgetPassword = ({ open, onClose, onLoginOpen }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    alert(`Reset link sent to: ${email}`);
    onClose();
    onLoginOpen();
    navigate("/login");
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Reset Your Password
        <IconButton
          onClick={() => {
            onClose();
            navigate("/");
          }}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <FaTimes />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <p>
          Sign up for early Sale access plus tailored new arrivals, trands and
          promotions. To opt ot, click unsubscribe in our emails
        </p>
        <TextField
          label="Email *"
          type="email"
          fullWidth
          margin="dense"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography>
          <button
            className="underline my-3"
            onClick={() => {
              onClose();
              navigate("/");
            }}
          >
            Cancle
          </button>
        </Typography>

        <Button onClick={handleReset} className="bg-black text-white w-full">
          Reset password
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ForgetPassword;
