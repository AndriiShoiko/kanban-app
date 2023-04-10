import React from "react";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.mediumGrey,
    backgroundColor: "inherit",
    minHeight: "48px",
    justifyContent: "flex-start",
    paddingLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: "0 100px 100px 0",
    borderStyle: "none",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.palette.menuHover.backgroundColor,
        borderStyle: "none",
    }
}));

export const HideSidebar = (props) => {
    return (
        <StyledButton variant='outlined' startIcon={<VisibilityOffOutlinedIcon />} {...props}>
            Hide Sidebar
        </StyledButton>
    )
}