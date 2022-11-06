import React from "react"
import {
    Box,
    Grid,
    Card, Typography,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from "@mui/material"
import PageHolder from "../components/pageHolder"

const AboutContainer = () => {
    return (
        <>
            <PageHolder id='about' title='ABOUT'>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'auto auto' } }}>
                    <div>image</div>
                    <div id='about-description'>
                        <Typography>Hello!</Typography>
                        <Typography>My name is Jacq and I like to create cool stuff to put on the web. Monday thru Friday I work as a Front End Developer at Rolling Robots, but on weekends and federal holidays I animate and create merch.</Typography>
                        <Typography>Some of my previous roles include:
                            <ul>
                                <li>Animation instructor at DigiPen Institute of Technology</li>
                                <li>Animation instructor at Sony Pictures Media Arts Program</li>
                                <li>Illustrator at Sketchy Medical</li>
                            </ul>
                        </Typography>
                        <Typography>Let's make cool stuff together: CONTACT</Typography>
                        <Button>Resume</Button>
                    </div>
                </Box>
            </PageHolder>

        </>
    )
}

export default AboutContainer