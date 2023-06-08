import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./eRegister.css";
import { useForm } from "react-hook-form";
import Link from "@mui/material/Link";
import axios from "../../../../Axios";


function eRegister() {
  //form submit  funtion
  const onSubmit = (data, event) => {
    event.preventDefault();

    

    const employee = {
      name: data.name,
      password:data.password
    }
 axios.post('/auth/create-employee/',employee).then((res)=>{
 console.log(res.data,"its Responceeeeee")
 })

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const defaultTheme = createTheme();

  return (
    <div>
      <div className="outer_div">
        <ThemeProvider theme={defaultTheme}>
          <header>
            {/* header left LeftSide */}

            <div>
              <div className="logo"></div>
            </div>

            {/* rightSide */}

            <div className="header_div">
              <h4 className="signup_head">Already Regitered employee ? </h4>{" "}
              <div className="header_eButton">
                {" "}
                <Button variant="contained">
                  <Link href="eLogin">
                    <span className="bt">LOGIN </span>
                  </Link>
                </Button>
              </div>
            </div>
          </header>
          <Container component="main" className="inner_div" maxWidth="xs">
            <CssBaseline />

            <Box>
              <div className="innerForn">
                <h2 className="heading"> Employee Register..</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    margin="Name"
                    id="name"
                    label="User name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    className="input"
                    fullWidth
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="error-message">
                      Username is required !
                    </span>
                  )}
                  <TextField
                    margin="normal"
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                    className="input"
                    fullWidth
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  {errors.password && (
                    <span className="error-message">
                      Password should have a minimum length of
                      6 characters !
                    </span>
                  )}

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="btn"
                  >
                    <span className="bt"> Register </span>
                  </Button>
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item></Grid>
                  </Grid>
                </form>
              </div>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default eRegister;
