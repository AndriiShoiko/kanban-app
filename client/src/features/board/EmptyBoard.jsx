import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { ButtonPrimaryL } from "../../ui/buttons/ButtonPrimaryL";

export const EmptyBoard = () => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
        }}>
            <Grid container direction="column" rowGap={{ sm: 2, md: 4 }} alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography variant="h4">
                        This board is empty. Create a new column to get started.
                    </Typography>
                </Grid>
                <Grid item>
                    <ButtonPrimaryL>
                        + Add New Column
                    </ButtonPrimaryL>
                </Grid>
            </Grid>
        </Box>
    )
}