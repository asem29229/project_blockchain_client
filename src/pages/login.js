import React, { useContext, useState, useEffect } from "react";
import { HOST } from "../network";
import axios from "axios"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../utils/AuthContext";
import HDWalletLogo from '../img/Untitled.png'


function Copyright(props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://superlative-cuchufli-7ae9fa.netlify.app/">
                Tasktick 
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#007BFF',
        },
        secondary: {
            main: '#6c757d',
        },
    },
});

export default function SignIn() {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const handleUserChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage("");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrorMessage("");
    }

    const validateLogin = async () => {
       /*  axios
        .post(`${HOST}/login/signin`, { username, password, type })
        .then(async (res) => {
          if (res.data.error === "No user found" || res.data.error === "Wrong password") {
            setErrorMessage("Invalid username or password");
            return;
          }
      
          // Set the token value in the AuthContext and localStorage when login is successful
          setAuth({ token: true });
     
      
          navigate("/Homepage");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("An error occurred. Please try again");
        }); */
      
    };

    useEffect(() => {
        setAuth({ token: false });
    }, []);



    return (
        <div id="showcase" style={{ height: '100vh', width: '100%' }}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{
                    backgroundColor: '#fff',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                    borderRadius: '5px',
                    padding: '20px',
                    marginTop: '4%',
                    width: '100%',  // Set a specific width
                    maxWidth: '500px',  // Set a maximum width
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={HDWalletLogo} alt="logo" style={{ height: '80%', width: '80%' }} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ textAlign: 'center', margin: '20px 0' }}>
                        Sign in
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',  // Set height to 100% to fill the container
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            name="Email"
                            label="Email"
                            type="Email"
                            autoComplete="current-password"
                            onChange={handleUserChange}
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handlePasswordChange}
                            sx={{ width: '100%' }}
                        />
                       {/*  <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        {errorMessage && (
                            <Typography color="error">
                                {errorMessage}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={validateLogin}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/ForgotPassword" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/SignUp" variant="body2">
                                    signUp
                                </Link>
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </div>
    );

}