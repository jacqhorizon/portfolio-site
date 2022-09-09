import React from "react"
import {
    Box,
    Grid, Card, CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button
} from "@mui/material"


const WebContainer = () => {
    return (
        <>
            <Box
                component='div'
                id='web'
                style={{
                    // backgroundColor: 'green',
                    minHeight: '100vh'
                }}
            >
                <div style={{textAlign: 'center'}}>
                    <Typography variant='h2'>WEB</Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                alt='project-image-1' 
                                image='https://static.onecms.io/wp-content/uploads/sites/47/2021/08/23/pictures-of-german-shepherds-2000.jpg' />
                            <CardContent>
                                <Typography variant='h5'>
                                    Project title
                                </Typography>
                                <Typography>
                                    here'es my descrip
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent: 'flex-end'}}>
                                <Button>More info</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardMedia
                                component='img'
                                alt='project-image-1' 
                                image='https://static.onecms.io/wp-content/uploads/sites/47/2021/08/23/pictures-of-german-shepherds-2000.jpg' />
                            <CardContent>
                                <Typography variant='h5'>
                                    Project title
                                </Typography>
                                <Typography>
                                    here'es my descrip
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent: 'flex-end'}}>
                                <Button>More info</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default WebContainer