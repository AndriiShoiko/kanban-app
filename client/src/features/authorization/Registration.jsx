import { Box, FormControl } from "@mui/material";
import { ButtonPrimaryS } from "../../ui/buttons/ButtonPrimaryS";
import { FormHelperTextPrimary } from "../../ui/fields/FormHelperTextPrimary";
import { TextFieldPrimary } from "../../ui/fields/TextFieldPrimary";
import { MainLogo } from "../../ui/Logos/MainLogo";
import { Layout } from "../layout/Layout";
import { formControlStyles } from "./StylesAndComponents";

export const Registration = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100wh",
          height: "100vh",
          backgroundColor: "background.default",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form>
          <Box
            sx={{
              width: 480,
              padding: 4,
              backgroundColor: "background.formBackground",
              borderRadius: "6px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <MainLogo />
            </Box>
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary id="email-helper-text" error={false}>
                E-mail
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="e-mail"
                error={false}
                aria-describedby="email-helper-text"
                size="medium"
              />
            </FormControl>
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary id="password-helper-text">
                Password
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="password"
                error={false}
                aria-describedby="password-helper-text"
              />
            </FormControl>
            <ButtonPrimaryS fullWidth>Sign Up</ButtonPrimaryS>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};
