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


const WebContainer = () => {
    const CARD_CONTENT = [
        {
            title: 'Rolling Robots',
            description: 'May 2022 - Present',
            image: '', 
            alt: ''
        },
        {
            title: 'Dress Up Game',
            description: '',
            image: '', 
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
                            <Grid item xs={12} sm={6}>
                                <WebCard
                                title={item.title}
                                description={item.description}
                                >
                                </WebCard>
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