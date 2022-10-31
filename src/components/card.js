import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'

const WebCard = (props) => {
    return (
        <Card>
            <CardMedia
                component='img'
                alt='project-image-1'
                image='https://static.onecms.io/wp-content/uploads/sites/47/2021/08/23/pictures-of-german-shepherds-2000.jpg' />
            <CardContent>
                <Typography variant='h5'>
                    {props.title}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button>More info</Button>
            </CardActions>
        </Card>
    )
}

export default WebCard
