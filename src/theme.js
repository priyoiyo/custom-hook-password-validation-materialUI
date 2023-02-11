
import { amber, deepPurple } from "@mui/material/colors";
import {createTheme} from "@mui/material";
  import { red,green } from "@mui/material/colors";
  
const theme = createTheme({
    spacing: 10,
    palette: {
      secondary: {
        main: green[500]
      }
    },
    typography: {
      myVariant: {
        fontSize: "2rem"
      }
    }
  });

export default theme