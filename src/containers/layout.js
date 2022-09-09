import React from "react"
// import { ThemeProvider } from "styled-components"
import { Box, Container } from '@mui/material'
import theme from '../theme.js'
import NavigationBar from "../components/navigation.js"
import LandingPage from "./landingPage.js"
import ArtContainer from "./artContainer.js"
import WebContainer from "./webContainer.js"
import AboutContainer from './aboutContainer.js'
import Footer from '../components/footer.js'

const LayoutContainer = () => {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <NavigationBar />
            <Container component='main' sx={{ marginTop: { xs: '56px', sm: '64px' } }}>
                    <LandingPage />
                    <WebContainer />
                    <ArtContainer />
                    <AboutContainer />
            </Container>
            <Footer />
            {/* </ThemeProvider> */}
        </>
    )
}

export default LayoutContainer