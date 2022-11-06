import React from "react"
import {
    Box,
    Grid,
    Card, Typography,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from "@mui/material"
import SquareGallery from "../components/squareGallery"
import coupleCommission from '../images/2_13_ThatRiasLover_commission.png'
import catCommission from '../images/IMG_1641.PNG'
import shiroCommission from '../images/2_20_pandancookie-commission.gif'
import greenCommission from '../images/3_13_benui-animated-icon.gif'
import { green } from "@mui/material/colors"
import PageHolder from "../components/pageHolder"


const ArtContainer = () => {
    const SQUARE_ARTWORK = [
        {
            alt: 'A girl with brown curly hair and man with long straight hair and wide brim hat make a heart shape with their hands',
            image: coupleCommission
        },
        {
            alt: 'A cat in a taco costume and a grey cat with one eye jump with a rainbow in the background',
            image: catCommission
        }
    ]

    const ANIMATED = [
        {
            alt: 'shiwo',
            image: shiroCommission
        },
        {
            alt: 'green',
            image: greenCommission
        }
    ]

    const Content = () => {
        return (
            <>


                {/* </Box> */}

            </>
        )
    }

    return (
        <PageHolder id='art' title='ART'>
            <Typography variant='h2'>Animation</Typography>
            <SquareGallery
                images={ANIMATED}
            />
            <Typography variant='h2'>Other Work</Typography>
            <SquareGallery
                images={SQUARE_ARTWORK} />

        </PageHolder>
    )
}

export default ArtContainer
