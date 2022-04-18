import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#15ab7e' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Barn
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
