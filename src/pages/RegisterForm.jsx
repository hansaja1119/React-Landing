import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (formik.values.firstName) {
      setWelcomeMessage(`Welcome, ${formik.values.firstName}!`);
    } else {
      setWelcomeMessage("Welcome to our site.");
    }
  }, [formik.values.firstName]);

  return (
    <div className="w-full bg-white dark:bg-[#000300] py-4 px-8 pt-[8rem]">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          Welcome to Our System
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {welcomeMessage}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your login time: {currentTime.toLocaleTimeString()}
        </p>

        <Container
          maxWidth="sm"
          className="dark:bg-gray-700 dark:text-white shadow-xl rounded-lg hover:scale-105 duration-300"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              className="text-gray-900 dark:text-gray-200 pt-2"
            >
              Login
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                className="bg-white dark:bg-gray-700 dark:text-white"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                margin="normal"
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                className="bg-white dark:bg-gray-700 dark:text-gray-200"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                margin="normal"
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                className="bg-white dark:bg-gray-700 dark:text-gray-200"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                className="bg-white dark:bg-gray-700 dark:text-gray-200"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
              />
              <Button
                color="success"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                className="dark:bg-[#000300] bg-[#00df9a]"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default RegisterForm;
