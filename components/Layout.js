import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>next-app fullstack</Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>NEXT APP</Typography>
        </Toolbar>
      </AppBar>
      <Container>children</Container>
      <footer>
        <Typography></Typography>
      </footer>
    </div>
  );
};

export default Layout;
