import { createMuiTheme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: green[500],
      light: "#0066ff",
    },
    background: {
      default: "#2f3f9f",
    },
  },
});

export default theme;
