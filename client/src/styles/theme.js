const darkBG = "#20212C";
const darkGrey = "#2B2C37";
const linesDark = "#3E3F4E";
const mediumGrey = "#828FA3";
const linesLight = "#E4EBFA";
const lightBG = "#F4F7FD";
const mainPurple = "#635FC7";
const mainPurpleHover = "#A8A4FF";
const red = "#EA5555";
const redHover = "#FF9898";

export const theme = {
  palette: {
    mode: "dark",
    common: {
      darkBG,
      darkGrey,
      linesDark,
      mediumGrey,
      linesLight,
      lightBG,
      mainPurple,
      mainPurpleHover,
      red,
      redHover,
    },
    background: {
      default: lightBG,
      paper: "white",
      formBackground: "white",
    },
    menuHover: {
      backgroundColor: mainPurple,
    },
  },
  typography: {
    h1: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "bold",
      fontSize: "1.5rem",
      lineHeight: "30px",
    },
    h2: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "bold",
      fontSize: "1.125rem",
      lineHeight: "23px",
    },
    h3: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "bold",
      fontSize: "0.9375rem",
      lineHeight: "19px",
    },
    h4: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "bold",
      fontSize: "0.75rem",
      lineHeight: "17px",
      letterSpacing: "1.4px",
      color: mediumGrey,
    },
    body1: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "normal",
      fontSize: "0.8125rem",
      lineHeight: "23px",
      color: darkGrey,
    },
    body2: {
      fontFamily: "Plus Jakarta Sans",
      fontWeight: "bold",
      fontSize: "0.75rem",
      lineHeight: "15px",
      color: darkGrey,
    },
    button: {
      fontFamily: "Plus Jakarta Sans",
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
  components: {
    buttonL: {
      fontSize: "0.9375rem",
      borderRadius: "24px",
      paddingLeft: "24px",
      paddingRight: "24px",
      minHeight: "48px",
    },
    buttonS: {
      fontSize: "0.8125rem",
      borderRadius: "20px",
      paddingLeft: "24px",
      paddingRight: "24px",
      minHeight: "40px",
    },
    drawer: {
      widthDesktop: "300px",
      widthTablet: "240px",
    },
    header: {
      heightDesktop: "96px",
      heightTablet: "80px",
    },
    cardTask: {
      minWidth: 280,
    },
    modalDialog: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 480,
      borderRadius: "6px",
    },
  },
};