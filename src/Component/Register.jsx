import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Login from "./Login";

const Register = ({ open, onClose, onLoginClick }) => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    localStorage.setItem("registeruser", JSON.stringify(input));
    setIsLoginOpen(true);
    onClose();
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    onClose();
  };

  useEffect(() => {
    if (isLoginOpen) {
      navigate("/login");
    }
  }, [isLoginOpen, navigate]);

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Register
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
            label="First Name"
            type="text"
            fullWidth
            margin="dense"
            variant="outlined"
            name="fname"
            value={input.fname}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            type="text"
            fullWidth
            margin="dense"
            variant="outlined"
            name="lname"
            value={input.lname}
            onChange={handleChange}
          />
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
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button
            onClick={handleRegister}
            color="primary"
            sx={{ backgroundColor: "black", color: "white", width: "232px" }}
          >
            Register
          </Button>
          <Link
            onClick={handleLoginClick}
            className="flex items-center text-black"
          >
            Already have an account? Login here{" "}
            <span>
              <GoArrowUpRight />
            </span>
          </Link>
        </DialogActions>
      </Dialog>

      <Login open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Register;
