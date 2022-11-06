import React from "react"
import {
    Box,
    Grid, Card, CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button
} from "@mui/material"
import PageHolder from "../components/pageHolder"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import WebCard from "../components/card"
import { KeyboardArrowRight } from "@mui/icons-material"
// import image from '../images/10_22_inktoberdressup.png'


const WebContainer = () => {
    const CARD_CONTENT = [
        {
            title: 'Rolling Robots',
            dates: 'May 2022 - Present',
            description: 'Front end developer for ecommerce and educational website',
            image: '10_5_temprollingrobotspreview.png',
            alt: '',
            alignment: 'top',
            link: 'https://www.rollingrobots.net/'
        },
        {
            title: 'Dress Up Game',
            dates: 'October 2022',
            description: 'Web app built in React',
            image: '10_22_inktoberdressup.png',
            alt: '',
            alignment: 'center',
            link: 'https://jacqsdressupgame.pages.dev/'
        }
    ]

    return (
        <>
            <PageHolder id='web' title='WEB'>
                <Grid container>
                    {CARD_CONTENT.map((item, index) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} sx={{ padding: '5px' }}>
                                    {/* <WebCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                >
                                </WebCard> */}
                                    {/* <img src={require(`../images/${item.image}`)} style={{ zIndex: index + 1 }} /> */}
                                    <Card elevation='0' sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia
                                            component='img'
                                            alt='project-image-1'
                                            image={require(`../images/${item.image}`)}
                                            sx={{ objectFit: 'cover', height: '300px', objectPosition: item.alignment }} />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant='h5' color='primary' onClick={() => window.open(item.link, '_blank')} sx={{display: 'flex', alignItems: 'center', '&:hover': {color: 'secondary.dark', transition: '0.2s'}}}>
                                                {item.title}
                                                <KeyboardArrowRight />
                                            </Typography>
                                            <Typography>
                                                {item.dates}
                                            </Typography>
                                            <Typography>
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button>More info</Button>
                                        </CardActions> */}
                                    </Card>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </PageHolder>
        </>
    )
}

export default WebContainer