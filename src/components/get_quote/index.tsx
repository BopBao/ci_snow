/// MUI ///
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// STYLES ///
import { bottom_banner_style } from "./styles";
import { banner_message_style } from "./styles";

interface Props {
  scrollTo: () => void
}
export default function GetQuote({ scrollTo }: Props) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={bottom_banner_style}>
      <div style={banner_message_style}>
        <Typography variant="h4" align="center">
          Fast, Free Quote - Start Now!
        </Typography>
        <Typography variant="body2">
          We strive for top-tier service. Expect to hear from us quickly!
        </Typography>
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={scrollTo} size="large">
          Get A Quote
        </Button>
      </div>
    </Stack>
  )
}
