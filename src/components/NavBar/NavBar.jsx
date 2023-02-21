import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#2c2c6c' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h3>Pelotero</h3>
          </Typography>
          <Button color="inherit">Categoría 1</Button>
          <Button color="inherit">Categoría 2</Button>
          <Button color="inherit">Categoría 3</Button>
          <CartWidget></CartWidget>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
