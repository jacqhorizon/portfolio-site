import React from 'react'
import { Box } from '@mui/material'

const PageHolder = ({ content, styles, id }) => {
    return (
        <Box 
        id={id}
        style={{
            ...styles,
            backgroundColor: '#fff', 
            padding: '100px 0px', 
            margin: '100px 0px',
            minHeight: '80vh',
            // justifyContent: 'center',
            // alignItems: 'center',
            // display: 'flex',
            // flexDirection: 'column'
        }}>
            {content}
        </Box>
    )
}

export default PageHolder
