import React from 'react'
import { Button, useMediaQuery } from '@mui/material'
import { Download } from '@mui/icons-material'
import Pdf from '../Jacq_Kirkman_resume_WEB.pdf'

const ViewResume = (props) => {

  return (
    <>
      <Button
        disableElevation
        endIcon={<Download />}
        sx={{
          color: '#fff',
          padding: '6px 16px',
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
