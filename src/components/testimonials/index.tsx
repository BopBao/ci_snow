/// REACT ///
import { useState } from "react";
/// MUI ///
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// FM ///
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
/// STYLES ///
import { testimonial_style } from "./styles";
/// VALUES ///
import { testimonials } from "./values/text";
import { videos } from "./values/video";
/// MOTIONS ///
import { carousel_variants } from "./animation/motion";

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);
  const [video_active, setVideoActive] = useState<number>(0);

  return (
    <Stack alignItems="center" justifyContent="space-between" sx={testimonial_style}>
      <div>
        <Typography variant="body2" align="center" sx={{ textTransform: "uppercase" }}>
          Hear from just a few of our many happy clients
        </Typography>
        <Typography variant="h4" align="center">
          Don't just take our word for it
        </Typography>
        <div style={{ backgroundColor: "#fafafa", height: "10vh", paddingTop: "5vh", paddingBottom: "8vh", width: "1000px", marginTop: "30px" }}>
          <AnimatePresence initial={false}>
            <div>
              {
                testimonials.map((test, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={index === active ? "show" : "hide"}
                      style={{ padding: "20px" }}
                      variants={carousel_variants}
                      animate={index === active ? "show" : "hide"}
                    >
                      <Typography variant="body1">
                        {test}
                      </Typography>
                    </motion.div>
                  )
                })
              }
            </div>
          </AnimatePresence>
        </div>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ paddingTop: "15px" }}>
          {
            testimonials.map((test, index) => {
              return (
                <IconButton onClick={() => setActive(index)} sx={{ width: "20px", height: "20px", backgroundColor: active === index ? "#323232" : "#666666" }}>
                </IconButton>
              )
            })
          }
        </Stack>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "50px" }}>
          {
            videos.map((video, index) => {
              return (
                <motion.div
                  key={index}
                  initial={index === video_active ? "show" : "hide"}
                  style={{ padding: "20px" }}
                  variants={carousel_variants}
                  animate={index === video_active ? "show" : "hide"}
                >
                  <iframe src={video} width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                </motion.div>
              )
            })
          }
        </div>
      </div>
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ paddingTop: "15px" }}>
        {
          videos.map((vid, index) => {
            return (
              <IconButton onClick={() => setVideoActive(index)} sx={{ width: "20px", height: "20px", backgroundColor: active === index ? "#323232" : "#666666" }}>
              </IconButton>
            )
          })
        }
      </Stack>
    </Stack >
  )
}
