import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const AllCollection = ({ open, onClose }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/collection");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open]);

  const handleAccordionChange = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          position: "absolute",
          left: 0,
          top: 0,
          margin: 0,
          height: "100vh",
          maxHeight: "100vh",
          width: "400px",
        },
      }}
      // data-aos="fade-right"
    >
      <DialogTitle className="py-4">
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", left: 25, top: 0 }}
        >
          <FaTimes />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loading &&
          !error &&
          data.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={() => handleAccordionChange(item.id)}
              sx={{
                boxShadow: "none",
                "&:before": { display: "none" },
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <AccordionSummary>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {/* Left side: Image and name */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #F2F2F2",
                        borderRadius: "100%",
                        padding: "2px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                          objectFit: "cover",
                          border: "1px solid #F2F2F2",
                        }}
                        onError={(e) =>
                          (e.target.src = "https://via.placeholder.com/40")
                        }
                      />
                    </div>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                  </div>

                  {/* Left-side line & Arrow */}
                  {item.description && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {/* Left vertical line */}
                      <div
                        style={{
                          height: "40px",
                          width: "2px",
                          backgroundColor: "#EBEBEB",
                        }}
                      ></div>
                      {/* Expand/Collapse Symbol */}
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          color: expanded === item.id ? "black" : "black",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {expanded === item.id ? "−" : "+"}
                      </Typography>
                    </div>
                  )}
                </div>
              </AccordionSummary>

              {/* Accordion Details */}
              {item.description && (
                <AccordionDetails>
                  <Typography>{item.description}</Typography>
                </AccordionDetails>
              )}
            </Accordion>
          ))}
      </DialogContent>
      <DialogTitle className="overflow-hidden" style={{ padding: "0px" }}>
        <div className="bg-[#F2F2F2] p-4">
          <Link className="text-black flex items-center gap-1 underline-offset-1 text-[16px]">
            View all collection <GoArrowUpRight />
          </Link>
        </div>
      </DialogTitle>
    </Dialog>
  );
};

export default AllCollection;
