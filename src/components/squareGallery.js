import { React, useState } from 'react'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion"
import thatRiasLoverCommission from '../images/2_13_ThatRiasLover_commission.png'

const Gallery = (props) => {
    const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))


    const [fullScreen, setFullScreen] = useState(false)
    const [fullScreenImg, setFullScreenImg] = useState('')

    const FullScreenImg = () => {
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
                            alt={fullScreenImg.alt}
                            src={require(`../images/${fullScreenImg.image}`)}
                            sx={{ objectFit: 'scale-down', width: '90vw', height: '90vh' }}
                        />
                    </motion.div>
                </div>
            </>
        )
    }

    const openFullScreen = (index) => {
        setFullScreen(true)
        setFullScreenImg(props.content[index])
    }

    const closeFullScreen = () => {
        setFullScreen(false)
        setFullScreenImg('')
    }

    return (
        <>
            {fullScreen ? <FullScreenImg /> : <></>}
            {props.type == 'square' ?
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'auto auto' }, gridColumnGap: '15px', gridRowGap: '15px', ...props.style }}>
                    {props.content.map((item, index) => {
                        return (
                            <>
                                <Box key={item.alt} alt={item.alt} component='img' src={require(`../images/${item.image}`)} style={{ width: '100%', height: '100%', borderRadius: '8px' }} onClick={() => { openFullScreen(index) }} />
                            </>
                        )
                    })}
                </Box>
                : <></>}
            {props.type == 'triplet' ?
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'repeat(3, auto)' }, gridColumnGap: '15px' }}>
                    {props.content.map((item, index) => {
                        return (
                            <Box key={item.alt}>
                                <img alt={item.alt}
                                    src={require(`../images/${item.image}`)}
                                    style={{ objectFit: 'cover', width: '100%', height: mobile ? 300 : 500, borderRadius: '8px' }}
                                    onClick={() => { openFullScreen(index) }} />
                            </Box>
                        )
                    })}
                </Box>
                : <></>}
            {props.type == 'one to two' ?
                <Box sx={{ marginTop: '15px', display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'repeat(2, auto)' }, gridTemplateRows: { xs: '100px', sm: 'repeat(2, 250px)' }, gridColumnGap: '15px', gridRowGap: '15px' }}>
                    {props.content.map((item, index) => {
                        const area = {
                            0: '1/1/3/2',
                            1: '1/2/2/3',
                            2: '2/2/3/3'
                        }
                        return (
                            <Box
                                key={item.alt}
                                sx={{
                                    gridArea: area[index]
                                }}>
                                <img alt={item.alt}
                                    src={require(`../images/${item.image}`)}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
                                    onClick={() => { openFullScreen(index) }} />
                            </Box>
                        )
                    })}
                </Box>
                : <></>}
                {props.type=='full' ? 
                <Box sx={{display: 'grid', gridRowGap: '15px', ...props.style}}>
                    {props.content.map((item, index) => {
                        return (
                            <Box 
                            component='img'
                            src={require(`../images/${item.image}`)}
                            alt={item.alt}
                            key={item.alt}
                            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
                            onClick={() => { openFullScreen(index) }}
                            />
                        )
                    })}
                </Box> 
                : <></>}
        </>
    )
}


export default Gallery
