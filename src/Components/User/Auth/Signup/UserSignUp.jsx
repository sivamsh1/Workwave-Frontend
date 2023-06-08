import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./signUp.css";
import { useForm } from "react-hook-form";
import axios from "../../../../Axios";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function UserSignUp() {
  const navigate = useNavigate();

  //Destucturing userForm details
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(" ");

  // To access the form datas
  const onSubmit = (data, event) => {
    event.preventDefault();

    axios.post("/auth/user-register", data).then((res) => {
      try{
        const tokenData = res.data.tokenData
        console.log(tokenData,"dfsfsaddfrtwr")

        if(tokenData.status === 200){
          localStorage.setItem("userjwt" ,tokenData.accessToken)
          navigate('/home')
        }else{
          setError(tokenData.message)
        }
       
      }catch(err){
        console.log(err)
      }

      
    });
  };

  const defaultTheme = createTheme();

  return (
    <div className="outer_div">
      <ThemeProvider theme={defaultTheme}>
        <header>
          {/* header left LeftSide */}

          <div>
            <div className="logo"></div>
          </div>

          {/* rightSide */}

          <div className="header_div">
            <h4 className="signup_head">Already playing with WorkWave?</h4>{" "}
            <div className="header_button">
              {" "}
              <Button variant="contained">
                <Link href="/userLogin">
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
              <h2 className="heading"> Let's go! </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  className="input"
                  fullWidth
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="error-message">This field is required.</span>
                )}

                <TextField
                  margin="normal"
                  id="phone"
                  label="Phone number"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  className="input"
                  fullWidth
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                />
                {errors.phone && (
                  <span className="error-message">Invalid phone number.</span>
                )}

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
                  <span className="error-message">Invalid email address.</span>
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
                  <span className="error-message">
                    Password must be at least 6 characters.
                  </span>
                )}

                <p className="error-message"> {error} </p>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className="btn"
                >
                  <span className="bt"> SignUp </span>
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
  );
}

export default UserSignUp;
