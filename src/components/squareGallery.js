import { React, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { motion } from "framer-motion"
import thatRiasLoverCommission from '../images/2_13_ThatRiasLover_commission.png'

const SquareGallery = ({ images }) => {

    const [fullScreen, setFullScreen] = useState(false)
    const [fullScreenImg, setFullScreenImg] = useState('')
    
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
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, type: 'spring'}}>
                        <Box
                            component='img'
                            alt={fullScreenImg.alt}
                            src={fullScreenImg.image}
                            sx={{ width: '60vw' }}
                        />
                    </motion.div>
                </div>
            </>
        )
    }

    const openFullScreen = (index) => {
        setFullScreen(true)
        setFullScreenImg(images[index])
    }

    const closeFullScreen = () => {
        setFullScreen(false)
        setFullScreenImg('https://www.bubblypet.com/wp-content/uploads/2020/11/Sable-German-Shepherd-standing-on-stone.jpg')
    }
    return (
        <>
            {fullScreen ? <FullScreenImg /> : <></>}
            <Grid container spacing={2}>
                {images.map((art, index) => {
                    return (
                        <>
                            <Grid item xs={12} sm={6} sx={{ }}> {/*I suspect this may not be centered*/}
                                <Box
                                    component='img'
                                    alt={art.alt}
                                    // src={`/images/${art.image}`}
                                    // src={`images/2_13_ThatRiasLover_commission.png`}
                                    src={art.image}
                                    sx={{ width: '100%' }}
                                    // sx={{ width: 100, height: 100, objectFit: 'cover' }}
                                    onClick={() => { openFullScreen(index) }}
                                />
                            </Grid>
                        </>
                    )
                })}

            </Grid>
        </>
    )
}

export default SquareGallery

