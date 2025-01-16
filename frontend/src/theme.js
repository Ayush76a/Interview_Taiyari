import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E4053",      // Deep blue-grey
      light: "#4A5F70",     // Lighter blue-grey
      dark: "#1B2631",      // Darker blue-grey
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C0392B",      // Professional red
      light: "#D65548",     // Lighter red
      dark: "#922B21",      // Darker red
      contrastText: "#ffffff",
    },
    error: {
      main: "#E74C3C",      // Error red
      light: "#FF6B6B",
      dark: "#C0392B",
    },
    warning: {
      main: "#F39C12",      // Warning orange
      light: "#FBD07A",
      dark: "#D68910",
    },
    info: {
      main: "#3498DB",      // Info blue
      light: "#5DADE2",
      dark: "#2E86C1",
    },
    success: {
      main: "#27AE60",      // Success green
      light: "#2ECC71",
      dark: "#219A52",
    },
    background: {
      default: "#F8F9FA",   // Light grey background
      paper: "#ffffff",     // White surface
    },
    text: {
      primary: "#2C3E50",   // Dark grey text
      secondary: "#5D6D7E", // Medium grey text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: "0.5em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.3,
      marginBottom: "0.5em",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;