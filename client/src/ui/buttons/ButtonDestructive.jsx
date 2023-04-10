import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonDestructive = styled(Button)(({ theme }) => ({
    ...theme.components.buttonS,
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.white,
    "&:hover": {
        backgroundColor: theme.palette.common.redHover
    }
}));

