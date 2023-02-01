import React from 'react'
import PageHolder from '../components/pageHolder'
import { Box, Typography } from '@mui/material'

const DesignRefreshContainer = () => {
  return (
    <PageHolder id='design-refresh' title='Design Refresh'>
      <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component='img'
            src={require('../images/design_refresh/camp_BEFORE_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>Before</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component='img'
            src={require('../images/design_refresh/camp_AFTER_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>After</Typography>
        </Box>
      </Box>
    </PageHolder>
  )
}

export default DesignRefreshContainer
