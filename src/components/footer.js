import React from 'react'
import { Box, IconButton, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ArchiveIcon from '@mui/icons-material/Archive'

const Footer = () => {

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
        // {
        //     title: 'Instagram',
        //     link: 'https://www.instagram.com/jacqets/',
        //     icon: <InstagramIcon fontSize='inherit' />
        // },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jacq-kirkman-792b49123/',
            icon: <LinkedInIcon fontSize='inherit' />
        },
        // {
        //     title: 'Etsy',
        //     link: 'https://www.etsy.com/shop/ArtsAndJacqs',
        //     icon: <StorefrontIcon fontSize='inherit' />
        // },
        // {
        //     title: 'Gumroad',
        //     link: 'https://jacqets.gumroad.com/',
        //     icon: <ArchiveIcon fontSize='inherit' />
        // }
    ]

    return (
        <>
            <Divider />
            <Box component='footer'>
                <ul id='links' style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
                    {FOOTER_LINKS.map((feet) => {
                        return (
                            <li key={feet.title} style={{ padding: 5 }}>
                                <IconButton onClick={() => window.open(feet.link)} size='large' sx={{ color: 'neutral.main' }}>{feet.icon}</IconButton>
                            </li>
                        )
                    })}
                </ul>
            </Box>
        </>
    )
}

export default Footer
