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
    const styles = {
        description: {
            paddingBottom: '5px'
        }
    }
    return (
        <>
            <PageHolder id='about' title='ABOUT'>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', md: '50% 1fr' }, gridColumnGap: '15px', gridRowGap: '15px' }}>
                    <div id='about-image'>
        <Box component='img' src={require('../images/11_6_manjuiceday_noText.png')} alt='drawing of me with trans colored rainbow' sx={{width: '100%', height: {xs: '100%', sm: '400px', md: '500px'}, objectFit: 'cover'}} />
                    </div>
                    <div id='about-description'>
                        <Typography sx={styles.description}>Hello!</Typography>
                        <Typography sx={styles.description}>My name is Jacq and I like to create cool stuff to put on the web.</Typography>
                        <Typography sx={styles.description}>Monday thru Friday I work as a Front End Developer at Rolling Robots, but on weekends and federal holidays I animate and create merch.</Typography>
                        <Typography sx={styles.description}>Some of my previous roles include:
                            <ul>
                                <li>Animation instructor at DigiPen Institute of Technology</li>
                                <li>Animation instructor at Sony Pictures Media Arts Program</li>
                                <li>Animator for OR3O's "Living On" and "Karma"</li>
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