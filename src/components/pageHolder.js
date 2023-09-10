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
        backgroundColor: 'rgba(255, 255, 255, .9)',
        // backgroundColor: '#fff',
        paddingTop: '90px',
        // margin: { xs: '0px 3%', sm: '0% 8%', lg: '0% 10%', xl: '0% 15%' },
        margin: 'auto auto',
        maxWidth: '1200px',
        width: { xs: '90%', md: '85%', lg: '80%' },
        minHeight: '100vh',
        ...props.styles
      }}
    >
      <motion.div
        key='children'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        style={{ flexGrow: 1, ...props.box }}
      >
        {props.landing ? (
            <>
            <Box sx={{padding: '15px 5%'}}>
                {props.landing}
            </Box>
            </>
        ) : <></>}
        {props.title ? (
          <>
            <Box sx={{ margin: '0px 5%', display: 'flex' }}>
              <Typography variant='h1' color='primary' sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
                {props.title}
              </Typography>
              {/* <Box
                textAlign={'right'}
                alignSelf='flex-end'
                sx={{ marginBottom: '2%' }}
              >
                {props.subTitle}
              </Box> */}
            </Box>
            <Divider sx={{marginBottom: '20px'}} />
          </>
        ) : (
          <></>
        )}
        <Box sx={{ padding: '15px 5%' }}>{props.children}</Box>
      </motion.div>
      <Footer />
    </Box>
  )
}

export default PageHolder
