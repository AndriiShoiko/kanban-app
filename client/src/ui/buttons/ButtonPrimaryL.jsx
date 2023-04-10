import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonPrimaryL = styled(Button)(({ theme }) => ({
    ...theme.components.buttonL,
    backgroundColor: theme.palette.common.mainPurple,
    color: theme.palette.common.white,
    "&:hover": {
        backgroundColor: theme.palette.common.mainPurpleHover
    }
}));

