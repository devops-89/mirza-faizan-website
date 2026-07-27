"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import Heading from "../../widgets/Heading";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import {
  GET_IN_TOUCH_HEADING,
  GET_IN_TOUCH_DESCRIPTION,
} from "@/utils/generic";
import { useFormik } from "formik";
import {
  contactValidationSchema,
  initialContactFormValues,
  ContactFormValues,
} from "@/utils/validation";

const GetInTouch: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const formik = useFormik<ContactFormValues>({
    initialValues: initialContactFormValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted Successfully:", values);
      setOpenSnackbar(true);
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* Left Column: Heading + Description */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Heading label={GET_IN_TOUCH_HEADING} width="340px" />
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "14px", md: "15px" },
                lineHeight: "1.7",
                color: COLORS.TEXT_COLOR || "#4C4C4C",
                fontWeight: 400,
                mt: { xs: 2.5, md: 4 },
                maxWidth: { xs: "100%", md: 290 },
                textAlign: { xs: "left", md: "justify" },
              }}
            >
              {GET_IN_TOUCH_DESCRIPTION}
            </Typography>
          </Grid>

          {/* Right Column: Formik Form */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ pt: { xs: 0, md: 1 } }}
            >
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {/* Your Name Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    slotProps={{
                      input: {
                        disableUnderline: false,
                        sx: {
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "15px",
                          color: "#1F1F1F",
                          py: 1,
                          "&::placeholder": {
                            color: "#888888",
                            opacity: 1,
                          },
                          "&:before": {
                            borderColor: "#E0E0E0",
                          },
                          "&:hover:not(.Mui-disabled):before": {
                            borderColor: "#846A4E",
                          },
                          "&:after": {
                            borderColor: "#846A4E",
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Email Address Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    slotProps={{
                      input: {
                        disableUnderline: false,
                        sx: {
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "15px",
                          color: "#1F1F1F",
                          py: 1,
                          "&::placeholder": {
                            color: "#888888",
                            opacity: 1,
                          },
                          "&:before": {
                            borderColor: "#E0E0E0",
                          },
                          "&:hover:not(.Mui-disabled):before": {
                            borderColor: "#846A4E",
                          },
                          "&:after": {
                            borderColor: "#846A4E",
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    id="message"
                    name="message"
                    placeholder="Message"
                    multiline
                    rows={3}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    slotProps={{
                      input: {
                        disableUnderline: false,
                        sx: {
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "15px",
                          color: "#1F1F1F",
                          py: 1,
                          "&::placeholder": {
                            color: "#888888",
                            opacity: 1,
                          },
                          "&:before": {
                            borderColor: "#E0E0E0",
                          },
                          "&:hover:not(.Mui-disabled):before": {
                            borderColor: "#846A4E",
                          },
                          "&:after": {
                            borderColor: "#846A4E",
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#846A4E",
                      color: "#FFFFFF",
                      borderRadius: "30px",
                      px: 4,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "15px",
                      fontFamily: roboto.style.fontFamily,
                      boxShadow: "0 4px 14px rgba(132, 106, 78, 0.25)",
                      "&:hover": {
                        backgroundColor: "#6E563E",
                        boxShadow: "0 6px 18px rgba(110, 86, 62, 0.35)",
                      },
                    }}
                  >
                    Leave us a Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Success Notification Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ backgroundColor: "#846A4E", color: "#FFFFFF" }}
        >
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GetInTouch;
