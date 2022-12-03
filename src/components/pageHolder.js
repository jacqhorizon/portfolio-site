import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Footer from './footer'
import { motion } from 'framer-motion'

const PageHolder = (props) => {
    return (
        <Box
            id={props.id}
            sx={{

                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, .7)',
                paddingTop: '90px',
                margin: { xs: '0px 5%', sm: '0% 10%', lg: '0% 20%' },
                minHeight: '100vh',
                ...props.styles
            }}>
            <motion.div
                key='children'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{flexGrow: 1, ...props.box}}
                >
                {props.title ?
                    <>
                        <Typography variant='h1' color='primary' sx={{ margin: '0px 5%' }}>{props.title}</Typography>
                        <Divider />
                    </>
                    : <></>}
                <Box sx={{ padding: '15px 5%' }}>
                    {props.children}
                </Box>
            </motion.div>
            <Footer />
        </Box>
    )
}

export default PageHolder
