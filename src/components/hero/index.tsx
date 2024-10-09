/// MUI ///
import Typography from "@mui/material/Typography";
/// STYLES ///
import { hero_style } from "./styles";
import { inner_hero_style } from "./styles";

interface Props {
  scrollTo: () => void
}

export default function Landing({ scrollTo }: Props) {
  return (
    <div style={hero_style}>
      <div style={inner_hero_style}>
        <Typography variant="h1" sx={{ color: "#fff" }}>
          Out at first <br />
          trace of snow
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          At the slightest trace, we're there-guaranteeing prompt, <br />
          reliable snow removal all season long
        </Typography>
      </div>
    </div>
  )
}
