import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";




export default function NavBar() {
  const { logout, user, loading } = useAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
      try {
        await logout();
        navigate("/login");
      } catch (error) {
        console.error(error.message);
      }
  };

  React.useEffect(()=>{
    console.log('en navbar', user)

    console.log("user change!")
  },[user])

  if (!user && !loading){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="CoffeeRoundedIcon"
                    sx={{ mr: 2 }}
                    >
                        <CoffeeRoundedIcon />
                    </IconButton>
                </Link>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                
                </Typography>
                <Link to="/login">
                    <Button color="inherit">Sign in</Button>
                </Link>
                <Link to="/register">
                    <Button color="inherit">Sign Up</Button>
                </Link>
                <Link to="/" onClick={handleLogout}>
                    <Button color="inherit">Log Out</Button>
                </Link>
                </Toolbar>
            </AppBar>
        </Box>
      );
  } else if (user) {
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <Link to="/">
                  <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="CoffeeRoundedIcon"
                  sx={{ mr: 2 }}
                  >
                      <CoffeeRoundedIcon />
                  </IconButton>
              </Link>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
              </Typography>

              <Link to="/" onClick={handleLogout}>
                  <Button color="inherit">Log Out</Button>
              </Link>
              </Toolbar>
          </AppBar>
      </Box>
        )
    
  }
  
}