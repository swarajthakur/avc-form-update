import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Demo from './demo';
import logo from './download.png';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <img
        src={logo}
        alt="AVC Wise"
      />
      <Paper elevation={3} sx={{ mt: 3, px: 4 }}>
        <Typography sx={{ pt: 2 }}>Shared Cost AVC Application form</Typography>  
        <Demo />
      </Paper>
    </Container>
  </StyledEngineProvider>
);