import React from 'react'
import { Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    const FOOTER_LINKS = [
        {
            title: 'Email: jacqkirkman@gmail.com',
            link: 'mailto:jacqkirkman@gmail.com',
            icon: <MailOutlineIcon fontSize='inherit' />
        },
        {
            title: 'GitHub',
            link: 'https://zombo.com',
            icon: <GitHubIcon fontSize='inherit' />
        },
        {
            title: 'Instagram',
            link: 'https://zombo.com',
            icon: <InstagramIcon fontSize='inherit' />
        },
        {
            title: 'LinkedIn',
            link: 'https://zombo.com',
            icon: <LinkedInIcon fontSize='inherit' />
        }
    ]

    return (
        <>
            <Box component='footer'>
                {/* <div id='contact'>
                    <a href='https://zombo.com/' target='_blank' title='email me'>jacqkirkman@gmail.com</a>
                </div> */}
                    <ul id='links' style={{ display: 'flex', justifyContent: 'center', paddingLeft: 0, listStyleType: 'none'}}>
                        {FOOTER_LINKS.map((feet) => {
                            return (
                                <li style={{padding: 5}}>
                                    <IconButton onClick={() => window.open(feet.link)} size='large'>{feet.icon}</IconButton>
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
