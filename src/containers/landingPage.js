import React, { forwardRef, useRef, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Grid,
  Card,
  CardMedia,
  IconButton,
  CardActions,
  CardContent,
  Chip,
  useMediaQuery
} from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import PageHolder from '../components/pageHolder'
import { Download, ExpandMore } from '@mui/icons-material'
import ViewResume from '../components/viewResume'
const LandingPage = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const pageRef = useRef(null)
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['center center', 'end end']
  })

  const [isHover, setIsHover] = useState(false)

  const PageSection = forwardRef((props, ref) => {
    return (
      <Box
        id={props.id}
        sx={{ marginBottom: { xs: '10vh', sm: '10vh' }, ...props.style }}
        ref={ref}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant='h2'
            color='primary'
            sx={{ flexGrow: 1, textTransform: 'uppercase' }}
          >
            {props.title}
          </Typography>
          {/* <Box
                textAlign={'right'}
                alignSelf='flex-end'
                sx={{ marginBottom: '2%' }}
              >
                {props.subTitle}
              </Box> */}
        </Box>
        {/* <Divider sx={{ marginBottom: '20px' }} /> */}
        {props.children}
      </Box>
    )
  })

  const WORK_CONTENT = [
    {
      title: 'Chef Bop',
      link: 'link',
      description:
        'An app to make ordering groceries and cooking at home convenient',
      image: 'chef_bop/chefbop_desktop_mockups.png',
      skills: ['React', 'React Native', 'Node.js']
    },
    {
      title: 'Marketing Landing Pages',
      link: 'link',
      description:
        'I was responsible for building the website based on designs provided by the marketing team.',
      image: 'rrLandingPage.png',
      skills: ['React']
    }
  ]
  const WorkSection = ({ props }) => {
    //it has the brackets because its not expanded
    // let {title, link, description, image} = props
    return (
      <Box sx={{ marginBottom: '20px' }}>
        <Box
          component='img'
          sx={{ width: '100%' }}
          src={require(`../images/${props.image}`)}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          <Typography variant='h3' display='inline' sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {/* <Typography display='inline' fontFamily='Comfortaa' textAlign='right'>
            {props.link}
          </Typography> */}
          <Button>{props.link}</Button>
        </Box>
        <Typography>{props.description}</Typography>
        <Box sx={{ display: 'flex' }}>
          {props.skills.map((skillItem) => (
            <Chip label={skillItem} />
          ))}
        </Box>
      </Box>
    )
  }

  const styles = {
    // box: {
    //   display: 'flex',
    //   alignItems: 'center'
    // }
  }

  const SKILLS = [
    {
      id: 'development',
      title: 'Development',
      list: [
        'HTML/CSS',
        'Javascript',
        'React',
        'React Native',
        'Node.js',
        'Python',
        'MongoDB',
        'Material UI',
        'Firebase'
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      list: [
        'Command Line',
        'Git/Github',
        'Figma',
        'Adobe Photoshop',
        'XCode',
        'Visual Studio Code'
      ]
    }
  ]

  const CARD_CONTENT = [
    {
      title: 'Marketing Landing Page',
      dates: 'April 2023',
      description: 'Front End Developer',
      image: 'rrLandingPage.png',
      alt: 'marketing landing page screenshot',
      alignment: 'top',
      link: '/rr-landing-page'
    },
    {
      title: 'Email Tool',
      dates: 'October 2022',
      description: 'Design Sprint Lead, UX Designer, and Developer',
      image: 'email_tool.png',
      alt: 'Email Tool screen cap',
      alignment: 'top',
      link: '/email-tool'
    },
    {
      title: 'Design Refresh',
      dates: 'September 2022',
      description: 'UX Designer and Front End Developer',
      image: '10_5_temprollingrobotspreview.png',
      alt: 'Rolling Robots Account Info Page',
      alignment: 'top',
      link: '/design-refresh'
    }
  ]

  const ClickableCard = ({ item }) => {
    return (
      <motion.div
        whileHover={{
          y: -3,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        }}
        transition={{ duration: 0.5, type: 'spring' }}
        style={{ height: '100%' }}
      >
        <Card
          elevation='0'
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => {
            window.location = item.link
          }}
        >
          <CardMedia
            component='img'
            alt='project-image-1'
            image={require(`../images/${item.image}`)}
            sx={{
              objectFit: 'cover',
              height: '300px',
              objectPosition: item.alignment
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant='h5'
              color='primary'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {item.title}
            </Typography>
            <Typography>{item.dates}</Typography>
            <Typography>{item.description}</Typography>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <>
      <PageHolder
        id='landing-page'
        // box={{ ...styles.box, scrollBehavior: 'smooth' }}
        // title={<div ref={pageRef}>RECENT WORK</div>}
        // landing={<></>}
      >
        <Box
          sx={{
            height: { xs: '70vh', sm: '80vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <Typography variant='h1' color='primary'>
            Hello, I'm Jacq!
          </Typography>
          <Typography fontSize='1.5rem' fontFamily='Comfortaa'>
            I'm a UX Engineer. I design and build stuff for the web.
          </Typography>
          <ViewResume
            sx={{
              width: mobile ? '100%' : null,
              margin: { xs: '30px auto', sm: '30px 0px' }
            }}
          />
        </Box>
        <motion.div style={{ opacity: scrollYProgress }} ref={scrollRef}>
          <Box
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() =>
              pageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0px auto'
            }}
          >
            <motion.div
              animate={
                isHover
                  ? {
                      cursor: 'pointer'
                    }
                  : null
              }
            >
              <Typography fontFamily='Comfortaa'>SCROLL</Typography>
            </motion.div>
            <motion.div
              animate={
                isHover
                  ? {
                      y: 3,
                      cursor: 'pointer'
                    }
                  : null
              }
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <ExpandMore fontSize='large' />
            </motion.div>
          </Box>
        </motion.div>
        <PageSection title='About Me' id='about-me'>
          <Typography>
            Hello, my name is Jacq. While working in animation and educating the
            animators of the future, I found myself drawn to aspects of
            creativity that involved problem solving and logic. Through Free
            Code Camp resources, I taught myself how to code with the intent on
            building tools for teaching animation.
          </Typography>
          <Typography>
            Through this process I found myself absorbed into the limitless
            possibilities of coding. I am currently returning to college to
            pursue a degree in Computer Science. Today my passion lies in
            creating fun and interesting digital experiences. Currently at
            Rolling Robots, I optimize user journeys and boost efficiency
            through React and UX design. Let's craft exceptional digital
            experiences together!
            {/*TO DO: FIX*/}
          </Typography>
        </PageSection>
        <PageSection title='Skills' id='skills'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              gridGap: 10
            }}
          >
            {SKILLS.map((skillGroup) => {
              return (
                <Box key={skillGroup.id}>
                  <Typography variant='h3' sx={{ gridColumn: '1 / 3' }}>
                    {skillGroup.title}
                  </Typography>
                  <ul>
                    {skillGroup.list.map((listItem) => {
                      return (
                        <li>
                          <Typography key={listItem}>{listItem}</Typography>
                        </li>
                      )
                    })}
                  </ul>
                </Box>
              )
            })}
          </Box>
        </PageSection>
        <PageSection title='Recent Work' ref={pageRef} id='recent-work'>
          {WORK_CONTENT.map((workItem) => (
            <WorkSection props={workItem} />
          ))}
          {/* <Box
            sx={{x
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Typography variant='h3' display='inline' sx={{ flexGrow: 1 }}>
              Chef Bop{' '}
            </Typography>
            <Typography
              display='inline'
              fontFamily='Comfortaa'
              textAlign='right'
            >
              December 2022 - Present
            </Typography>
          </Box>
          <Typography sx={{ marginBottom: '20px' }}>
            An app to make ordering groceries and cooking at home convenient and
            accessible for neurodivergent people.
          </Typography>
          <Grid container spacing='15' sx={{ marginBottom: '40px' }}>
            <Grid item xs={12} sm={6}>
              <ClickableCard
                item={{
                  title: 'Chef Bop Prototype',
                  dates: 'April 2023',
                  description: 'UX Designer and Front End Developer',
                  image: 'chef_bop/chefbop_desktop_mockups.png',
                  alt: 'Chef Bop screenshot',
                  alignment: 'top',
                  link: '/chef-bop'
                }}
              />
            </Grid>
          </Grid>
        </PageSection>
        <PageSection>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Typography variant='h3' sx={{ flexGrow: 1 }}>
              Rolling Robots{' '}
            </Typography>
            <Typography fontFamily='Comfortaa'>May 2022 - Present</Typography>
          </Box>
          <Typography sx={{ marginBottom: '20px' }}>
            Web based platform to facilitate everything related to Rolling
            Robots course enrollment. Parents can enroll their students in
            robotics workshops. Instructors can manage students and parent
            contact.
          </Typography>
          <Grid container spacing='15' sx={{ marginBottom: '40px' }}>
            {CARD_CONTENT.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} sm={6} key={item.title}>
                    <ClickableCard item={item} />
                  </Grid>
                </>
              )
            })}
          </Grid> */}
        </PageSection>
        {/* <Box component='img' src={require('../images/8_25_meettheartistJACQ.png')} sx={{ width: '100%', borderRadius: '8px' }} /> */}
      </PageHolder>

      {/* </Box> */}
    </>
  )
}

export default LandingPage
