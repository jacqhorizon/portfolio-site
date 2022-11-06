import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Footer from './footer'

const PageHolder = (props) => {
    console.log(props.styles)
    return (
        <Box
            id={props.id}
            sx={{

                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, .7)',
                paddingTop: '90px',
                margin: {xs: '0px 5%', sm: '0% 10%', lg: '0% 20%'},
                minHeight: '100vh',
                // backgroundColor: 'orange'
                // margin: '100px 0px',
                // minHeight: '100vh',
                // justifyContent: 'center',
                // alignItems: 'center',
                // display: 'flex',
                // flexDirection: 'column'
                ...props.styles
            }}>
            {props.title ?
                <>
                    <Typography variant='h1' color='primary' sx={{ margin: '0px 5%' }}>{props.title}</Typography>
                    <Divider />
                </>
                : <></>}
            <Box sx={{ padding: '15px 5%', flexGrow: 1, ...props.box}}>
                {props.children}
            </Box>
            <Footer />
        </Box>
    )
}

export default PageHolder
