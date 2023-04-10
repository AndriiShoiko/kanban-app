import { Drawer as MuiDrawer } from "@mui/material";

import { styled } from '@mui/material/styles';

export const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'darkMode'
})(({ theme, darkMode }) => ({
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: theme.components.drawer.widthDesktop,
        [theme.breakpoints.down('md')]: {
            width: theme.components.drawer.widthTablet,
        },
        boxSizing: 'border-box',
        ...(darkMode && {
            backgroundColor: theme.palette.common.darkGrey,
        }),
    }
}));