import { createTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = () => createTheme({
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ms: 750, 
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
