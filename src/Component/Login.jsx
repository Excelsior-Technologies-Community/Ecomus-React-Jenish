import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Login = ({ open, onClose, onRegisterClick, onForgotPasswordClick }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("registeruser"));

    if (
      storedUser &&
      storedUser.email === input.email &&
      storedUser.password === input.password
    ) {
      setError("");
      onClose();
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Log in
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
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="dense"
          variant="outlined"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          variant="outlined"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {/* Forgot Password Button */}
        <Typography
          onClick={onForgotPasswordClick}
          style={{
            cursor: "pointer",
            textAlign: "start",
            color: "blue",
            marginTop: "10px",
            textDecoration: "underline",
          }}
        >
          Forgot your Password?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-around" }}>
        <Button
          onClick={handleLogin}
          color="primary"
          sx={{ backgroundColor: "black", color: "white", width: "232px" }}
        >
          Login
        </Button>
        <button
          onClick={onRegisterClick}
          className="flex items-center text-black"
        >
          Don't have an account? Register here{" "}
          <span>
            <GoArrowUpRight />
          </span>
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
