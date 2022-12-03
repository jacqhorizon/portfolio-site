import React from 'react'
import { Box, IconButton, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ArchiveIcon from '@mui/icons-material/Archive'
// import footerImg from '../images/9_16_footer_repeat_ver2.png'
import catCommission from '../images/IMG_1641.PNG'

const Footer = () => {
    const styles = {
        footer: {
            // backgroundColor: '#FFBAB8',
            // bottom: '-20px',
        }
    }

    const FOOTER_LINKS = [
        {
            title: 'Email: jacqkirkman@gmail.com',
            link: 'mailto:jacqkirkman@gmail.com',
            icon: <MailOutlineIcon fontSize='inherit' color='neutral' />
        },
        {
            title: 'GitHub',
            link: 'https://github.com/jacqthedog/',
            icon: <GitHubIcon fontSize='inherit' />
        },
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/jacqets/',
            icon: <InstagramIcon fontSize='inherit' />
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jacq-kirkman-792b49123/',
            icon: <LinkedInIcon fontSize='inherit' />
        },
        {
            title: 'Etsy',
            link: 'https://www.etsy.com/shop/ArtsAndJacqs',
            icon: <StorefrontIcon fontSize='inherit' />
        },
        // {
        //     title: 'Gumroad',
        //     link: 'https://jacqets.gumroad.com/',
        //     icon: <ArchiveIcon fontSize='inherit' />
        // }
    ]

    return (
        <>
            {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={footerImg}
      /> */}

            {/* <div style={{backgroundImage: `url(${footerImg})`, backgroundPosition: 'bottom', width: '100vw', height: '300px', backgroundSize: '20%', backgroundRepeat: 'repeat-x' }}></div> */}
            <Divider />
            <Box component='footer' style={styles.footer}>
                {/* <Box component='div' sx={{marginTop: '0px', backgroundImage: `url(${footerImg})`, backgroundPosition: 'bottom', width: '100vw', height: '250px', backgroundSize: '250px', backgroundRepeat: 'repeat-x' }}></Box> */}
                <ul id='links' style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
                    {/* <ul id='links' style={{ display: 'flex', justifyContent: 'center', paddingLeft: 0, listStyleType: 'none', backgroundColor: 'white', marginTop: '0px' }}> */}
                    {FOOTER_LINKS.map((feet) => {
                        return (
                            <li style={{ padding: 5 }}>
                                <IconButton onClick={() => window.open(feet.link)} size='large' sx={{ color: 'neutral.main' }}>{feet.icon}</IconButton>
                                {/* <a href={feet.link} target='_blank' title={feet.title}>{feet.icon}</a> */}
                            </li>
                        )
                    })}
                </ul>
            </Box>
        </>
    )
}

export default Footer
