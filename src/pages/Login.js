import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, TextField, Typography, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Login = () => {
    const { login, loginWithGoogle, loading, user } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loadingPost, setLoadingPost] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (success && !loading){
            console.log('goin to main', user)
            navigate("/main");
        }
      }, [success]);

    const formik = useFormik({
        initialValues: {
        email: 'tuCorreo@ejemplo.io',
        password: 'Password123'
        },
        validationSchema: Yup.object({
        email: Yup
            .string()
            .email(
            'Must be a valid email')
            .max(255)
            .required(
            'Email is required'),
        password: Yup
            .string()
            .max(255)
            .required(
            'Password is required')
        }),
        onSubmit: (values) => {
            setLoadingPost(true)
            getSubmit(values)
            formik.resetForm();
        }
    });

    const getSubmit = async (values) => {
        setLoadingPost(true)
        login(values.email, values.password).then(() => {
            // Signed in
            setLoadingPost(false)
            setSuccess(true)
          })
          .catch((error) => {
            setLoadingPost(false)
            setError('There has been an error:'+ error.message);
            navigate("/login");
          });
    };
    const handleGoogleSignin = async () => {
        console.log('im here')
        setLoadingPost(true)
        loginWithGoogle().then(()=>{
            console.log('IM HEEEEEEERE')
            setSuccess(true);
            setLoadingPost(false)
        }).catch((error)=>{
            setError(error.message);
            setLoadingPost(false)
        })
    };

    if (loadingPost){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
        return (
            <>
            <h1>
                Welcome!
            </h1>
            <h2>{error}</h2>
            <Box
                component="main"
                sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <Button
                        component={RouterLink}
                        to="/"
                        startIcon={<ArrowBackIcon fontSize="small" />}
                        >
                        Back
                    </Button>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }}>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Sign in
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            Sign in on the internal platform
                        </Typography>
                        </Box>
                        <Grid
                        container
                        spacing={3}
                        >
                        <Grid
                            item
                            xs={12}
                            md={12}
                        >
                            <Button
                                fullWidth
                                color="error"
                                startIcon={<GoogleIcon />}
                                onClick={handleGoogleSignin}
                                size="large"
                                variant="contained"
                                >
                                Login with Google
                            </Button>
                        </Grid>
                        </Grid>
                        <Box
                        sx={{
                            pb: 1,
                            pt: 3
                        }}
                        >
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                or login with email address
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign In Now
                            </Button>
                        </Box>
    
                        <Typography
                            color="textSecondary"
                            variant="body2"
                            >
                                Don&apos;t have an account?
                                {' '}
                                <Link
                                    to="/register"
                                    component={RouterLink}
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    >
                                    Sign Up
                                </Link>
                        </Typography>
                    </form>
                </Container>
            </Box>
            </>
        );
    }
};

export default Login;