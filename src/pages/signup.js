import React, { useContext, useState, useEffect } from "react";
import { HOST } from "../network";
import axios from "axios"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

export default function SignUp() {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isEmailValid = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const isPasswordValid = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/;
        return regex.test(password);
    }

    const handlelastNameChange = (e) => {
        setlastName(e.target.value);
        setErrorMessage("");
    }
    const handlefirstNameChange = (e) => {
        setfirstName(e.target.value);
        setErrorMessage("");
    }
    const handleUserChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage("");
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrorMessage("");
    }

    const createNewUser = async () => {
        // Check for empty fields
        if (!firstName || !lastName || !email || !password) {
            setErrorMessage("All fields are required");
            return;
        }
    
        // Validate email
        if (!isEmailValid(email)) {
            setErrorMessage("Invalid email");
            return;
        }
    
        // Validate password
        if (!isPasswordValid(password)) {
            setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 10 characters long");
            return;
        }
    
        try {
            const resp = await axios.post(`${HOST}/user/AddUser`, { firstName, lastName, email, password });
    
            if (resp.data === "User added") {
                console.log("user added");
                // Clear the form
                setfirstName("");
                setlastName("");
                setEmail("");
                setPassword("");
                setErrorMessage("");
            }
            else {
                setErrorMessage(resp.data);  // Show the error message from the server
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred. Please try again.");
        }
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
                        Sign SignUp
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
                            name="firstName"
                            label="First Name"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={handlefirstNameChange}
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="lastName"
                            label="Last Name"
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={handlelastNameChange}
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="Email"
                            label="Email"
                            type="email"
                            id="email"
                            value={email}
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
                            value={password}
                            onChange={handlePasswordChange}
                            sx={{ width: '100%' }}
                        />


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
                            onClick={createNewUser}
                        >
                            Sign UP
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
                                <Link href="/" variant="body2">
                                    Login
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