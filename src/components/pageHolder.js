import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Footer from './footer'

const PageHolder = (props) => {
    return (
        <Box
            id={props.id}
            style={{
                // ...props.styles,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, .8)',
                paddingTop: '90px',
                margin: '0px 10%',
                minHeight: '100vh'
                // margin: '100px 0px',
                // minHeight: '100vh',
                // justifyContent: 'center',
                // alignItems: 'center',
                // display: 'flex',
                // flexDirection: 'column'
            }}>
            {props.title ?
                <>
                    <Typography variant='h1' color='primary' sx={{ margin: '0px 5%' }}>{props.title}</Typography>
                    <Divider />
                </>
                : <></>}
            <Box sx={{ padding: '2% 5%', flexGrow: 1 }}>
                {props.children}
            </Box>
            <Footer />
        </Box>
    )
}

export default PageHolder
