import { React, useState } from "react"
import {
    Box,
    Grid,
    Card, Typography,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from "@mui/material"


const ArtContainer = () => {

    const ARTWORK = [
        {
            alt: 'german shepherd',
            image: 'https://s36700.pcdn.co/wp-content/uploads/2016/07/GSD-text-courtesy-Connie-Cabanela-600x497.jpg.optimal.jpg'
        },
        {
            alt: 'another german shepherd',
            image: 'https://thegermanshepherder.com/wp-content/uploads/2020/06/GSD-looking-straight-720x720.jpg'
        },
        {
            alt: 'another another',
            image: 'https://valorprotectiondogs.com/wp-content/uploads/2021/07/Protection-Dog-for-Sale-Boise-Freya-768x512.jpg'
        }
    ]

    const [fullScreen, setFullScreen] = useState(false)
    const [fullScreenImg, setFullScreenImg] = useState('https://www.bubblypet.com/wp-content/uploads/2020/11/Sable-German-Shepherd-standing-on-stone.jpg')
    const FullScreenImg = () => {
        return (
            <>
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}
                    onClick={() => { setFullScreen(false) }}
                >
                    <div>
                        <Box
                            component='img'
                            alt={fullScreenImg.alt}
                            src={fullScreenImg.image}
                            sx={{ width: '60vw' }}
                        />
                    </div>
                </div>
            </>
        )
    }

    const openFullScreen = (index) => {
        setFullScreen(true)
        setFullScreenImg(ARTWORK[index])
    }

    const closeFullScreen = () => {
        setFullScreen(false)
        setFullScreenImg('https://www.bubblypet.com/wp-content/uploads/2020/11/Sable-German-Shepherd-standing-on-stone.jpg')
    }

    return (
        <>
            {fullScreen ? <FullScreenImg /> : <></>}
            <Box
                component='div'
                id='art'
                style={{
                    // backgroundColor: 'blue',
                    minHeight: '100vh'
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <Typography variant='h2'>ART</Typography>
                </div>
                <Grid container spacing={2}>
                    {ARTWORK.map((art, index) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        component='img'
                                        alt={art.alt}
                                        src={art.image}
                                        sx={{ width: '100%' }}
                                        onClick={() => { openFullScreen(index) }}
                                    />
                                </Grid>
                            </>
                        )
                    })}

                </Grid>
            </Box>

        </>
    )
}

export default ArtContainer
