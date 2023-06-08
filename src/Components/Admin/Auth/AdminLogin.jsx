import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminLogin.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../../Axios";
import { Link } from "@mui/material";



function AdminLogin() {

const [error,setError] = useState('');
const navigate  = useNavigate()

//form Submiting fuction

const onSubmit = (data,event)=>{
 
  event.preventDefault();

  const admin = {
    email:data.email,
    password:data.password,
  }

  axios.post('/auth/admin-login',admin).then((res)=>{
  
 const tokenData = res.data.tokenData.tokenData;
  
   if(tokenData.status === 200){
    navigate('/adminHome')
   }else{
    setError(tokenData.message)
   }

  })


}


const  { register, handleSubmit , formState:{errors}} = useForm()
  
 const defaultTheme = createTheme();

  return (
    <div className="outer_div">
      <ThemeProvider theme={defaultTheme}>
        <header>

          <div>
            <div className="logo"></div>
          </div>


          <div className="header_div">      
            <h4 className="signup_head">"Maximize productivity, minimize stress.<br />   ~ Team Workload"</h4>{"  "}
          </div>           
        </header>
        <Container component="main" className="inner_div" maxWidth="xs">
          <CssBaseline />

          <Box>
            <div className="innerForn">
              <h2 className="heading"> Admin Login.. </h2>
              
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
                  <span className="error-message">Please enter valid email address !</span>
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
                  <span className="error-message"> Your password must me atleast 6 charecters ! </span>
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

export default AdminLogin;
