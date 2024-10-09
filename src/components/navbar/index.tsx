/// MUI ///
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// IMAGES ///
import Logo from "static/Logo.png";
/// STYLES ///
import { toolbar_style } from "./styles";


interface Props {
  scrollTo: () => void
}

export default function NavBar({ scrollTo }: Props) {
  return (
    <AppBar position="fixed" sx={toolbar_style}>
      <Toolbar disableGutters={true} variant="dense">
        <Stack direction="row" alignItems="center">
          <img
            src={Logo}
            width="75"
            height="75"
            style={{ objectFit: "contain" }}
            alt="Arris" />
          <Stack>
            <Typography variant="h6">
              Capital <br />
              Snow <br />
              Removal
            </Typography>
          </Stack>
        </Stack>
        <div style={{ flexGrow: 1 }}></div>
        <Button onClick={scrollTo} variant="contained" size="large">
          Request Quote
        </Button>
      </Toolbar>
    </AppBar>
  );
}
