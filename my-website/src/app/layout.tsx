import '@fontsource/roboto'; // Default weights (400, 500, 700)

import { PropsWithChildren } from "react";
import "./globals.css";
import Header from "@/components/Header"
import Footer from '@/components/Footer';

import { Box, Container } from '@mui/material';


export default function RootLayout({
  children,
}: PropsWithChildren<{}>) {        
  return (
    <html lang="en">
      <body>
        <Container className="globalContainer" sx={{}}>
          <Header />
            <Box className="content" sx={{paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10 , backgroundColor:""}}>
            {children}
            </Box>
          <Footer className="footer"/>
        </Container>




      </body>
    </html>
  );


}