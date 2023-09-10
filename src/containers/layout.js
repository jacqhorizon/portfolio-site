import React, {useRef} from "react"
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
import AnimationContainer from "./animationContainer.js"
import EmailToolContainer from './emailToolContainer.js'
import DesignRefreshContainer from './designRefreshContainer.js'
import RRLandingPageContainer from './rrLandingPageContainer.js'
import ChefBopContainer from './chefBopContainer.js'

const LayoutContainer = () => {
    const scrollTestRef = useRef()

    const handleScroll = (id) => {
        if (id == 'skills') {
            scrollTestRef.current.scrollTest()
        } else {
            scrollTestRef.current.scrollAbout()
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>

                <CssBaseline />
                <BrowserRouter>
                    <NavigationBar handleScroll={handleScroll} />
                    <div component='main' style={{
                        // backgroundColor: 'rgb(255,186,210)',
                        // backgroundImage: `url(${bgGrid})`,
                        // backgroundImage: `url(${bgGrid}), linear-gradient(180deg, rgba(255,186,210,1) 0%, rgba(168,234,247,1) 100%)`,
                        // backgroundSize: '200px',
                        // position: 'absolute', left: 0, bottom: 0, right: 0, top: 0,
                        
                    }}>
                        {/* <PageHolder content={<LandingPage />} /> */}
                        <Routes>
                            <Route path='/' element={<LandingPage ref={scrollTestRef} />} />
                            <Route path='/web' element={<WebContainer />} />
                            <Route path='/art' element={<ArtContainer />} />
                            <Route path='/about' element={<AboutContainer />} />
                            <Route path='/animation' element={<AnimationContainer />} />

                            <Route path='/email-tool' element={<EmailToolContainer />} />
                            <Route path='/design-refresh' element={<DesignRefreshContainer />} />  
                            <Route path='/rr-landing-page' element={<RRLandingPageContainer />} />
                            <Route path='/chef-bop' element={<ChefBopContainer />} />                          
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