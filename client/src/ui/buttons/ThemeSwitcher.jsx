import React from "react";

import { Stack, Switch } from "@mui/material";
import { styled } from '@mui/material/styles';

import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const StyledSwitch = styled(Switch)(({ theme }) => ({
    '&  .MuiSwitch-track': {
        backgroundColor: theme.palette.common.mainPurple,
        opacity: 1
    },
    '& .css-1i8lvs-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        opacity: 1
    }
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    color: theme.palette.common.mediumGrey,
    backgroundColor: theme.palette.background.default,
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(2),
    },
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
    borderRadius: "6px"
}));

export const ThemeSwitcher = (props) => {
    return (
        <StyledStack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <LightModeRoundedIcon />
            <StyledSwitch color="default" {...props} />
            <DarkModeRoundedIcon />
        </StyledStack>
    )
}