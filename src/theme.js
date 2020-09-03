import { createMuiTheme } from "@material-ui/core/styles";

import green from "@material-ui/core/colors/green";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
