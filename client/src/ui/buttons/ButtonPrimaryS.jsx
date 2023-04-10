import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonPrimaryS = styled(Button)(({ theme }) => ({
    ...theme.components.buttonS,
    backgroundColor: theme.palette.common.mainPurple,
    color: theme.palette.common.white,
    "&:hover": {
        backgroundColor: theme.palette.common.mainPurpleHover
    }
}));

