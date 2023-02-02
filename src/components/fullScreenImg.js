import React from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion"

const FullScreenImg = ({setFullScreen, imgAlt, imgSrc}) => {

    return (
        <>
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    zIndex: 20,
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}>
                    <Box
                        component='img'
                        alt={imgAlt}
                        src={imgSrc}
                        sx={{ objectFit: 'scale-down', width: '90vw', height: '90vh' }}
                    />
                </motion.div>
            </div>
        </>
    )
}

export default FullScreenImg;
