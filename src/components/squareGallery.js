import { React, useState } from 'react'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion"
import thatRiasLoverCommission from '../images/2_13_ThatRiasLover_commission.png'
import FullScreenImg from './fullScreenImg'

const Gallery = (props) => {
    const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))


    const [fullScreen, setFullScreen] = useState(false)
    const [fullScreenImg, setFullScreenImg] = useState('')

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
            {fullScreen ? <FullScreenImg imgAlt={fullScreenImg.alt} imgSrc={require(`../images/${fullScreenImg.image}`)} setFullScreen={setFullScreen} /> : <></>}
            {props.type == 'square' ?
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'auto auto' }, gridColumnGap: '15px', gridRowGap: '15px', ...props.style }}>
                    {props.content.map((item, index) => {
                        return (
                            <>
                                <Box key={item.alt} alt={item.alt} component='img' src={require(`../images/${item.image}`)} style={{ width: '100%', height: '100%', borderRadius: '8px' }} onClick={() => { openFullScreen(index) }} loading='lazy' />
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
                                    onClick={() => { openFullScreen(index) }} 
                                    loading='lazy'/>
                            </Box>
                        )
                    })}
                </Box>
                : <></>}
            {props.type == 'one to two' ?
                <Box sx={{ marginTop: '15px', display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'repeat(2, auto)' }, gridTemplateRows: { xs: 'repeat(3, auto)', sm: 'repeat(2, 250px)' }, gridColumnGap: '15px', gridRowGap: '15px' }}>
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
                                    gridArea: {sm: area[index]}
                                }}>
                                <img alt={item.alt}
                                    src={require(`../images/${item.image}`)}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
                                    onClick={() => { openFullScreen(index) }} 
                                    loading='lazy' />
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
                            loading='lazy'
                            />
                        )
                    })}
                </Box> 
                : <></>}
        </>
    )
}


export default Gallery
