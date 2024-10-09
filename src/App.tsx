/// REACT ///
import { useRef } from "react";
/// COMPONENTS ///
import About from "./components/about";
import Footer from "components/footer";
import GetQuote from "components/get_quote";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import QuoteForm from "components/quote_form";
import Testimonials from "components/testimonials";
import Service from "components/service";
/// MUI ///
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./themes";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    if (ref?.current) {
      ref.current.scrollIntoView();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar scrollTo={scrollTo} />
        <Grid container>
          <Grid item xs={12}>
            <Hero scrollTo={scrollTo} />
          </Grid>
          <Grid item xs={12}>
            <GetQuote scrollTo={scrollTo} />
          </Grid>
          <Grid item xs={12}>
            <About scrollTo={scrollTo} />
          </Grid>
          <Grid item xs={12}>
            <Testimonials />
          </Grid>
          <Grid item xs={12}>
            <Service />
          </Grid>
          <Grid item xs={12} ref={ref}>
            <QuoteForm />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
