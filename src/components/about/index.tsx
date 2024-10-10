/// MUI ///
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// STYLES ///
import { about_style } from "./styles";

interface Props {
  scrollTo: () => void
}

export default function About({ scrollTo }: Props) {
  return (
    <div style={about_style}>
      <Stack direction="column" alignItems="center">
        <Typography variant="h2" sx={{ color: "#fff" }}>
          No hidden fees, <br />
          just premium service
        </Typography>
        <List sx={{ listStyleType: "disc", color: "#fff", paddingBottom: "35px", paddingTop: "35px" }}>
          <ListItem sx={{ display: "list-item" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Unlimited service - daily visits during snowfalls!
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Daily service after first trace of snowfall, no limit on days
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Flat-rate prices-no hidden fees
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Reliable, dependable customer care
            </Typography>
          </ListItem>
        </List>
        <Button variant="contained" color="secondary" onClick={scrollTo} size="large">
          Get A Quote
        </Button>
      </Stack>
    </div>
  )
}
