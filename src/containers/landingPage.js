import React from "react"
import {
    Box,
    Container,
    Typography
} from '@mui/material'
import { motion } from "framer-motion"
import PageHolder from "../components/pageHolder"

const LandingPage = () => {

    const Content = () => {
        return (
            <>

            </>
        )
    }

    const styles = {
        box: {
            display: 'flex',
            alignItems: 'center'
        }
    }
    return (
        <>
            {/* <Box
                component='div'
                id='landing-page'
                style={{
                    // backgroundColor: 'orange',
                    height: '95vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }} */}

            <PageHolder id='landing-page' box={styles.box}>
                <Box component='img' src={require('../images/8_25_meettheartistJACQ.png')} sx={{ width: '100%', borderRadius: '8px' }} />
            </PageHolder>

            {/* </Box> */}
        </>
    )
}

export default LandingPage