import React from "react"
import { ThemeProvider } from "@mui/material"
import { Box, Container, CssBaseline, Typography } from '@mui/material'
import theme from '../theme.js'
import NavigationBar from "../components/navigation.js"
import LandingPage from "./landingPage.js"
import ArtContainer from "./artContainer.js"
import WebContainer from "./webContainer.js"
import AboutContainer from './aboutContainer.js'
import Footer from '../components/footer.js'
import PageHolder from "../components/pageHolder.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import bgGrid from '../images/10_26_website_grid.png'

const LayoutContainer = () => {
    return (
        <>
            <ThemeProvider theme={theme}>

                <CssBaseline />
                <BrowserRouter>
                    <NavigationBar />
                    <div component='main'>
                        {/* <PageHolder content={<LandingPage />} /> */}
                        <Routes>
                            <Route path='/' element={<LandingPage />} />
                            <Route path='/web' element={<WebContainer />} />
                            <Route path='/art' element={<ArtContainer />} />
                            <Route path='/about' element={<AboutContainer />} />
                        </Routes>
                        {/* <LandingPage />
                        <WebContainer />
                        <ArtContainer />
                        <AboutContainer /> */}
                    </div>
                    {/* <Footer /> */}
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default LayoutContainer