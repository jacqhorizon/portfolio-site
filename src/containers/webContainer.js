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
import WebCard from "../components/card"
// import image from '../images/10_22_inktoberdressup.png'


const WebContainer = () => {
    const CARD_CONTENT = [
        {
            title: 'Rolling Robots',
            dates: 'May 2022 - Present',
            description: 'Designed and coded ecommerce/educational website',
            image: '10_5_temprollingrobotspreview.png',
            alt: ''
        },
        {
            title: 'Dress Up Game',
            dates: 'October 2022',
            description: 'Web app built in React',
            image: '10_22_inktoberdressup.png',
            alt: ''
        }
    ]

    return (
        <>
            <PageHolder id='web' title='WEB'>
                <Grid container>
                    {CARD_CONTENT.map((item, index) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} sx={{padding: '5px'}}>
                                    {/* <WebCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                >
                                </WebCard> */}
                                    {/* <img src={require(`../images/${item.image}`)} style={{ zIndex: index + 1 }} /> */}
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            alt='project-image-1'
                                            image={require(`../images/${item.image}`)} />
                                        <CardContent>
                                            <Typography variant='h5' color='primary'>
                                                {item.title}
                                            </Typography>
                                            <Typography variant='subtitle'>
                                                {item.dates}
                                            </Typography>
                                            <Typography>
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button>More info</Button>
                                        </CardActions>
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