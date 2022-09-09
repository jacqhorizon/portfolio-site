import React from "react"
import { Box,
Grid,
Card, Typography,
CardActions,
CardContent, 
CardMedia,
Button } from "@mui/material"


const AboutContainer = () => {
    return (
        <>
            <Box
                component='div'
                id='about'
                style={{
                    // backgroundColor: 'purple',
                    height: '100vh'
                }}
            >
                <div style={{textAlign: 'center'}}>
                    <Typography variant='h2'>ABOUT</Typography>
                </div>
                <div>
                    Hello my name is Jacq i make stuff
                </div>
            </Box>

        </>
    )
}

export default AboutContainer