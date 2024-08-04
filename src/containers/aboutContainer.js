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
import Pdf from '../JacqKirkman_Resume_Tech_Aug_2024.pdf'
import ViewResume from '../components/viewResume'

const AboutContainer = () => {
    const styles = {
        description: {
            paddingBottom: '5px'
        }
    }

    const downloadPDF = () => {
        fetch('Jacq_Kirkman_Tech_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Jacq_Kirkman_Tech_Resume.pdf'
                alink.click()
            })
        })
    }

    const openPdf = () => {
        window.open(Pdf)
    }
    return (
        <>
            <PageHolder id='about' title='ABOUT'>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', md: '50% 1fr' }, gridColumnGap: '15px', gridRowGap: '15px' }}>
                    <div id='about-image'>
                        <Box component='img' src={require('../images/11_6_manjuiceday_noText.png')} alt='drawing of me with trans colored rainbow' sx={{ width: '100%', height: { xs: '100%', sm: '400px', md: '500px' }, objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                    <div id='about-description'>
                        <Typography sx={styles.description}>Hello!</Typography>
                        <Typography sx={styles.description}>My name is Jacq and I like to create cool stuff to put on the web.</Typography>
                        <Typography sx={styles.description}>Monday thru Friday I work as a Front End Developer at Rolling Robots, but on weekends and federal holidays I'm an animator, merch artist, and silly goose.</Typography>
                        <Typography sx={styles.description}>Some of my previous roles include:
                            <ul>
                                <li>Animation instructor at DigiPen Institute of Technology</li>
                                <li>Animation instructor at Sony Pictures Media Arts Program</li>
                                <li>Animator for OR3O's "Living On" and "Karma"</li>
                                <li>Illustrator at Sketchy Medical</li>
                            </ul>
                        </Typography>
                        <Typography sx={styles.description}>Let's make cool stuff together!</Typography>
                        <Typography sx={{marginBottom: '20px'}}>Email: jacqkirkman@gmail.com</Typography>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        {/* <Button variant='contained' disableElevation sx={{color: '#fff'}} onClick={() => window.open('mailto:jacqkirkman@gmail.com')}>CONTACT ME</Button> */}
                            {/* <Button variant='contained' disableElevation sx={{color: '#fff'}} onClick={() => openPdf()}>Download Resume</Button> */}
                        <ViewResume />
                        </div>
                    </div>
                </Box>
            </PageHolder>

        </>
    )
}

export default AboutContainer