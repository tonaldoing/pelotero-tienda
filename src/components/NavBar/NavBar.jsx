import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#2c2c6c', marginBottom: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"><h3>Pelotero</h3></Link>
          </Typography>
          <Button color="inherit"><Link to="/productos/F11">Fútbol 11</Link></Button>
          <Button color="inherit"><Link to="/productos/Sala">Fútbol Sala</Link></Button>
          <Button color="inherit"><Link to="/productos/Mini">Mini</Link></Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
