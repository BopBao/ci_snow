/// MUI ///
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
/// COMPONENTS ///
import Form from "./form";
/// STYLES ///
import { quote_form_style } from "./styles";

export default function QuoteForm() {
  return (
    <div style={quote_form_style}>
      <Stack direction="column" alignItems="center">
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Hear back from us fast!
        </Typography>
        <Typography variant="h2" sx={{ color: "#fff" }}>
          Get a quote now
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          By phone (780) 989-3987 or by this form
        </Typography>
        <Form />
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Any questions? Give us a call  - we'd love to chat!
        </Typography>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          780-989-3987
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          customerservice@capitalirrigation.com
        </Typography>
      </Stack>
    </div>
  )
}
