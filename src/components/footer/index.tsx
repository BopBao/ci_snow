/// MUI ///
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// STYLES ///
import { footer_style } from "./styles";

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={footer_style}>
      <Stack>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "0.85rem" }}>
          Copyright @2017 Capital Snow Removal - a division of <a style={{ textDecoration: "none" }} href="www.capitalirrigation.com">Capital Irrigation</a>
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "0.85rem" }}>
          Capital Irrigation
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "0.85rem" }}>
          4507-97 Street, Edmonton AB, T6E 5Y8
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "0.85rem" }}>
          customerservice@capitalirrigation.com
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", fontSize: "0.85rem" }}>
          780-989-3987
        </Typography>
      </Stack>
    </Stack>
  )
}
