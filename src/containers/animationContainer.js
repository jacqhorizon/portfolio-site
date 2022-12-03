import React from 'react'
import PageHolder from '../components/pageHolder'
import Gallery from '../components/squareGallery'
import { Typography, Box } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material'

const AnimationContainer = () => {

    const GIFS = [
        {
            alt: 'shiro smiling with hearts animation',
            image: '2_20_pandancookie-commission.gif'
        },
        {
            alt: 'bakugo screaming animation',
            image: '2_12_bakugo-icon-anim.gif'
        },
        {
            alt: 'brown hair girl with puppies animation',
            image: '3_5_anna-commision-2-ver2.gif'
        },
        {
            alt: 'blonde guy with glasses falling asleep animation',
            image: '3_13_benui-animated-icon.gif'
        }
    ]

    const FILMS = [
        // {
        //     id: '2020-reel',
        //     link: 'https://player.vimeo.com/video/498530274',
        //     type: 'vimeo'
        // },
        {
            id: 'lets-go-fishing',
            link: 'https://player.vimeo.com/video/428614273',
            type: 'vimeo'
        },
        {
            id: 'living-on',
            link: 'https://www.youtube.com/embed/9Z9MTSUrvQ8?start=39',
            type: 'youtube'
        },
        {
            id: 'sweet-beet',
            link: 'https://www.youtube.com/embed/m3uUk9PwvZI',
            type: 'youtube'
        },
        {
            id: 'bring-the-cake',
            link: 'https://www.youtube.com/embed/P1PM_NjV3W4',
            type: 'youtube'
        }
    ]

    const Video = ({ link, type, id }) => {
        const iframeStyle = {
            overflow: 'hidden',
            borderRadius: '8px',
            alignSelf: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }

        return (
                <Box
                key={id}
                    sx={{ paddingBottom: '56.25%', position: 'relative', marginBottom: '20px' }}
                >
                    {type == 'vimeo' ?
                        <iframe
                            src={link}
                            allowfullscreen
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            style={iframeStyle}
                        ></iframe>
                        : <iframe

                            src={link}
                            style={iframeStyle}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>}
                </Box>
        )
    }
    return (
        <PageHolder id='animation' title='ANIMATION'>
            <Gallery
                type='square'
                content={GIFS}
            />
            <Typography variant='h2' sx={{marginTop: '20px'}}>Films</Typography>
            {FILMS.map((film) => <Video link={film.link} type={film.type} id={film.id} />)}
        </PageHolder>
    )
}

export default AnimationContainer
