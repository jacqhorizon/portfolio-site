import React from 'react'
import { Button, useMediaQuery } from '@mui/material'
import { Download } from '@mui/icons-material'
import Pdf from '../JacqKirkman_Resume_Tech_Aug_2024.pdf'

const ViewResume = (props) => {

  return (
    <>
      <Button
        variant='contained'
        disableElevation
        endIcon={<Download />}
        sx={{
          color: '#fff',
          ...props.sx
        }}
        onClick={() => window.open(Pdf)}
      >
        Resume
      </Button>
    </>
  )
}

export default ViewResume
