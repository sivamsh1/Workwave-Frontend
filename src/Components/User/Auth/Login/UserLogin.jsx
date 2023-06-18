import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "../../../../Axios";
import { useNavigate } from "react-router-dom";




const defaultTheme = createTheme();

function UserLogin() {

const [error,setError] = useState('');
const navigate  = useNavigate()

  // form submit function
  const onSubmit = (data, event) => {
    event.preventDefault();
   axios.post("/auth/user-login",data).then((res)=>{
     
   if(res.data.tokenData.status == 200){

console.log(res.data.tokenData,"dataaaaaaaaaaaaaaa")

     localStorage.setItem(res.data.tokenData.accessToken);
navigate('/home')

   }else{
     setError(res.data.tokenData.message);
   }
     
   })
    
  };

  //userForm datas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="outer_div">
      <ThemeProvider theme={defaultTheme}>
        <header>
          {/* header left LeftSide */}

          <div>
            <a href="/landingPage" className="logo" ></a>
          </div>

          {/* rightSide */}

          <div className="header_div">
            <h4 className="signup_head">Don't have WorkWave account ?</h4>{" "}
            <div className="header_button">
              {" "}
              <Link href="/userSignup">
                <Button variant="contained">SignUp</Button>
              </Link>
            </div>
          </div>
        </header>
        <Container component="main" className="inner_div" maxWidth="xs">
          <CssBaseline />

          <Box>
            <div className="innerForn">
              <h2 className="heading"> Welcome back ! </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  margin="normal"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className="input"
                  fullWidth
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span className="error-message">Invalid Email !</span>
                )}
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className="error-message"> Invalid Password ! </span>
                )}
                <p className="error-message" >{error}</p>
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

export default UserLogin;
