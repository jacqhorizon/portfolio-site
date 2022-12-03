import React from "react"
import {
    Box,
    Grid, Card, CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    IconButton
} from "@mui/material"
import PageHolder from "../components/pageHolder"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import WebCard from "../components/card"
import { Launch, GitHub } from "@mui/icons-material"
// import image from '../images/10_22_inktoberdressup.png'


const WebContainer = () => {
    const CARD_CONTENT = [
        {
            title: 'Rolling Robots',
            dates: 'May 2022 - Present',
            description: 'Front end developer for ecommerce and educational website',
            image: '10_5_temprollingrobotspreview.png',
            alt: 'Rolling Robots Account Info Page',
            alignment: 'top',
            link: 'https://www.rollingrobots.net/'
        },
        {
            title: 'Dress Up Game',
            dates: 'October 2022',
            description: 'Web app built in React',
            image: '10_22_inktoberdressup.png',
            alt: 'Dress Up Game Preview image',
            alignment: 'center',
            gitHub: 'https://github.com/jacqthedog/dress-up-game',
            link: 'https://jacqsdressupgame.pages.dev/'
        }
    ]

    return (
        <>
            <PageHolder id='web' title='WEB'>
                <Grid container spacing='15'>
                    {CARD_CONTENT.map((item, index) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6}>
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
                                            <Typography variant='h5' color='primary' sx={{ display: 'flex', alignItems: 'center' }}>
                                                {item.title}
                                            </Typography>
                                            <Typography>
                                                {item.dates}
                                            </Typography>
                                            <Typography>
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            {item.gitHub ?
                                                <IconButton onClick={() => window.open(item.gitHub, '_blank')}>
                                                    <GitHub color='primary' />
                                                </IconButton>
                                                : <></>}
                                            <IconButton onClick={() => window.open(item.link, '_blank')}>
                                                <Launch color='primary' />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                        )
                    })}
                    <Grid item xs={12} sm={12}>
                        <Card elevation='0' sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant='h5' color='primary' sx={{ display: 'flex', alignItems: 'center' }}>
                                    Portfolio Website
                                </Typography>
                                <Typography>
                                    Last Update: December 2022
                                </Typography>
                                <Typography>
                                    You are here! Prototyped in Figma. Built with React, MUI, and Framer Motion
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <IconButton onClick={() => window.open('https://github.com/jacqthedog/portfolio-site', '_blank')}>
                                    <GitHub color='primary' />
                                </IconButton>

                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </PageHolder>
        </>
    )
}

export default WebContainer