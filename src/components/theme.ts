import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeSettings: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#376eff',
    },
    secondary: {
      main: '#d12222',
    },
    info: {
      main: '#2196f3',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      secondary: '#676a7d',
      disabled: '#b8bbcc',
      primary: '#1a1b21',
      hint: '#b8bbcc',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          height: '100%',
          overflow: 'hidden',
        },
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiSwitch: {
      root: {
        padding: 0,
        height: 24,
        width: 48,
        display: 'flex',
      },
      switchBase: {
        padding: 3,
        color: '#fff',
        '&$checked': {
          transform: 'translateX(24px)',
          '& + $track': {
            opacity: 1,
            backgroundColor: '#4579ff',
          },
        },
      },
      thumb: {
        width: 18,
        height: 18,
        backgroundColor: '#fff',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
      },
      track: {
        height: 24,
        width: 48,
        borderRadius: 12,
        border: 'none',
        backgroundColor: '#b8bbcc',
        opacity: 1,
      },
      checked: {},
      sizeSmall: {},
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
          color: 'rgb(95, 139, 255)',
        },
        '&:focus': {
          color: 'rgb(38, 77, 178)',
        },
        '&$selected': {
          color: '#376eff',
        },
      },
      selected: {},
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#376eff',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 13,
      },
    },
    MuiTypography: {
      button: {
        textTransform: 'none',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiPaper: {
      variant: 'outlined',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
};
