/// MUI ///
import Typography from "@mui/material/Typography";
/// STYLES ///
import { service_style } from "./styles";
import { inner_service_style } from "./styles";

export default function Service() {
  return (
    <div style={service_style}>
      <div style={inner_service_style}>
        <Typography variant="h1" sx={{ color: "#fff" }}>
          20+ YEARS
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", marginTop: "-20px" }}>
          Of keeping thousands of clients snow-free with unmatched reliability and care.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", marginTop: "30px" }}>
          Over the past couple decades,
          we've built lasting relationships with hundreds
          of satisfied clients who trust us to deliver dependable,
          top-tier snow removal. Our commitment to excellence and attention to detail have kept them coming back year after year.
        </Typography>
      </div>
    </div>
  )
}
