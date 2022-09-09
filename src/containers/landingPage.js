import React from "react"
import { Box, 
    Container,
Typography } from '@mui/material'

const LandingPage = () => {
    return (
        <>
        <Box 
        component='div'
        id='landing-page'
        style={{
            // backgroundColor: 'orange',
            height: '95vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}
        >

            <div style={{textAlign: 'center'}}>
                <Typography variant='h1'>JACQ KIRKMAN</Typography>
                <Typography variant='h3'>welcome to my fucking page</Typography>
            </div>
        </Box>
        </>
    )
}

export default LandingPage