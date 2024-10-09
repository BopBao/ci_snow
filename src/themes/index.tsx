import { createTheme } from "@mui/material/styles";

export const primary_color: string = "#004890";
const white_color: string = "#fff";
const secondary_color: string = "#e8d778";
const error_color: string = "#ec503e";
const text_primary: string = "#333333";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 920,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: primary_color
    },
    secondary: {
      main: secondary_color
    },
    error: {
      main: error_color
    },
    text: {
      primary: text_primary
    }
  },
  typography: {
    fontFamily: [
      "M PLUS Rounded 1c",
      "Lexend Deca"
    ].join(","),
    h1: {
      fontSize: "5.5rem",
      fontFamily: "Lexend Deca",
      textTransform: "uppercase",
      color: text_primary,
      letterSpacing: "0.125em"
    },
    h2: {
      fontSize: "4rem",
      fontFamily: "Lexend Deca"
    },
    h3: {
      fontSize: "3rem",
      fontFamily: "Lexend Deca",
      textTransform: "uppercase",
      color: text_primary
    },
    h4: {
      fontSize: "2.3rem",
      fontFamily: "Lexend Deca",
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    h5: {
      fontSize: "2.5rem",
      fontFamily: "Lexend Deca"
    },
    h6: {
      fontSize: "1.1rem",
      fontFamily: "Lexend Deca",
      textTransform: "uppercase",
      color: text_primary
    },
    body1: {
      fontFamily: "M PLUS Rounded 1c",
      fontSize: "1.2rem",
      color: text_primary,
      whiteSpace: "pre-line",
      wordWrap: "break-word"
    },
    body2: {
      fontFamily: "M PLUS Rounded 1c",
      fontSize: "1.5rem",
      fontWeight: "300",
      color: text_primary,
      whiteSpace: "pre-line",
      wordWrap: "break-word"
    },
    button: {
      fontFamily: "Lexend Deca"
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          style: {
            fontSize: 16,
          }
        },
        InputLabelProps: {
          style: {
            fontSize: 16,
          }
        }
      }
    },
  }
});

