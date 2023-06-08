import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./elogin.css";
import { useForm } from "react-hook-form";


let handleSubmit = () => {};

const defaultTheme = createTheme();

function eLogin() {

  // form submit function
  const onSubmit = (data,event)=>{
    event.preventDefault();
    console.log(data)
  }

  //userForm datas
  const {register,handleSubmit,formState:{ errors}} = useForm();

  
  return (
    <div className="outer_div">
      <ThemeProvider theme={defaultTheme}>
        <header>
          {/* header left LeftSide */}

          <div>
            <div className="logo"></div>
          </div>

          {/* <h2 className='slogan' >  "Elevate your performance, master your workload." </h2> */}

          {/* rightSide */}

          <div className="header_div">
            <h4 className="signup_head"> Not an registered Employee ?</h4>{" "}
            <div className="header_ebutton">
              {" "}
              <Link href="landingPage" >
              <Button variant="contained">home</Button>
              </Link>
            </div>
          </div>
        </header>
        <Container component="main" className="inner_div" maxWidth="xs">
          <CssBaseline />

          <Box>
            <div className="innerForn">
              <h2 className="heading"> Employee Login... </h2>
             <form  
              onSubmit={handleSubmit(onSubmit)}
             >
                <TextField
                  margin="normal"
                  
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className="input"
                  fullWidth
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span className="error-message" >Invalid Email !</span> }
                <TextField
                  margin="normal"
             
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register('password', { required: true, minLength: 6 })} 
                />
                { errors.password && <span className="error-message"> Invalid Password ! </span> }
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className="btn"
                >
                  <span className="bt"> Login </span>
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {" Forgot password ? "}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default eLogin;
