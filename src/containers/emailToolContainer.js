import React, { useState } from 'react'
import PageHolder from '../components/pageHolder'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { Face2, Face3 } from '@mui/icons-material'
import FullScreenImg from '../components/fullScreenImg'

const EmailToolContainer = () => {
  const [fullScreen, setFullScreen] = useState(false)
  const [fullScreenImg, setFullScreenImg] = useState('')
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'))

  const openFullScreen = (obj) => {
    setFullScreen(true)
    setFullScreenImg(obj)
  }

  const closeFullScreen = () => {
    setFullScreen(false)
    setFullScreenImg('')
  }

  const PageSection = (props) => {
    return (
      <Box id={props.id} sx={{ marginBottom: '40px', ...props.style }}>
        {props.children}
      </Box>
    )
  }

  const SMALL_MARGIN = '20px'

  const SpeechBubble = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          marginBottom: SMALL_MARGIN
        }}
      >
        {props.left ? (
          <>
            <div
              style={{
                minWidth: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography align='center'>Ms. Bing</Typography>
              <Face3 fontSize='large' />
            </div>
            <div
              style={{
                width: 0,
                height: 0,
                borderBottom: '20px solid #fff',
                borderLeft: '30px solid transparent',
                marginBottom: '10px'
              }}
            />
            <div
              style={{
                backgroundColor: '#fff',
                padding: '15px',
                borderRadius: '10px 10px 10px 10px'
              }}
            >
              {props.children}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                backgroundColor: '#fff',
                padding: '15px',
                borderRadius: '10px 10px 10px 10px'
              }}
            >
              {props.children}
            </div>
            <div
              style={{
                width: 0,
                height: 0,
                borderBottom: '20px solid #fff',
                borderRight: '30px solid transparent',
                marginBottom: '10px'
              }}
            />
            <div
              style={{
                minWidth: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography>Onashly</Typography>
              <Face2 fontSize='large' />
            </div>
          </>
        )}
      </div>
    )
  }

  const Option = (props) => {
    return (
      <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Typography variant='h3' sx={{ gridColumn: '1/3' }}>
          {props.title}
        </Typography>
        <div>{props.img}</div>
        <Typography>{props.text}</Typography>
        <Box
          sx={{
            gridColumn: '2/3',
            display: 'grid',
            gridTemplateColumns: '50% 50%'
          }}
        >
          <Typography>{props.pros}</Typography>
          <Typography>{props.cons}</Typography>
        </Box>
      </Box>
    )
  }
  //Grouping selection: I need to be able to select email recipient groupings by location, subscription, activity, and tags. I also need the freedom to mix and match groupings as needed.
  //Rich Text: I need to be able to format emails to include hyperlinks, basic text formatting, and pictures. If I could have something like the Gmail editor that would be ideal.
  return (
    <PageHolder id='email-tool' title='Email Tool'>
      {fullScreen ? (
        <FullScreenImg
          imgAlt={fullScreenImg.alt}
          imgSrc={require(`../images/${fullScreenImg.image}`)}
          setFullScreen={setFullScreen}
        />
      ) : (
        <></>
      )}

      {/* <Typography>
        As quickly as possible, create a tool that will allow instructors to
        send emails to specific groups of users based on which classes they are
        taking
      </Typography> */}
      <PageSection
        id='overview'
        style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridColumnGap: SMALL_MARGIN }}
      >
        <Box sx={{gridColumn:{xs: '1/3', md: '1/2'}}}>
          <Typography variant='h3'>The Task</Typography>
          <Typography sx={{ marginBottom: '10px' }}>
            Create a tool that will allow instructors to send emails to specific
            groups of users based on which classes they are taking
          </Typography>
          <Typography variant='h3'>The Approach</Typography>
          <Typography sx={{ marginBottom: SMALL_MARGIN }}>
            A design sprint spanning 1 to 2 weeks with a focus on prioritizing
            user pain points to design and ship a functioning tool quickly and
            efficiently
          </Typography>
        </Box>
        <Box sx={{gridColumn:{xs: '1/3', md: '2/3'}}}>
          <Typography variant='h3'>The Team</Typography>
          <Typography>
            <ul>
              <li>
                <b>George:</b> the boss - the connection between developers and
                instructors
              </li>
              <li>
                <b>Sam:</b> lead developer and database expert{' '}
              </li>
              <li>
                <b>My role:</b> sprint lead, designer, and front end developer
              </li>
            </ul>
          </Typography>
        </Box>
        <Box
          component='img'
          alt='email tool screenshot'
          src={require('../images/email_tool.png')}
          sx={{
            gridColumn: '1/3',
            width: '100%',
            borderRadius: '8px',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            openFullScreen({ alt: 'email tool', image: 'email_tool.png' })
          }
        />
      </PageSection>

      <PageSection>
        <Typography variant='h2'>Understanding {mediumScreen? <br /> : null} Instructor's Needs</Typography>
        <Typography>
          To start, we evaluated the current process for sending out emails and
          interviewed instructors. We asked instructors about their frustrations
          with the current email system and gathered information about the
          specificity they desired.
        </Typography>
        <Typography sx={{ marginBottom: SMALL_MARGIN }}>
          From this discussion, we decided to focus on the following priorities:
        </Typography>
        <Box sx={{ width: { sm: '100%', lg: '80%' }, margin: 'auto' }}>
          <SpeechBubble left={true}>
            <Typography>
              Currently, I only have the option to email an entire subscription
              group. I need to be able to select email recipient groupings by
              location, subscription, activity, and tags. I also need the
              freedom to mix and match groupings as needed.
            </Typography>
          </SpeechBubble>
          <SpeechBubble left={false}>
            <Typography>
              I need to be able to format emails to include hyperlinks, basic
              text formatting, and pictures. If I could have something like the
              Gmail editor that would be ideal.
            </Typography>
          </SpeechBubble>
        </Box>
      </PageSection>

      <PageSection>
        <Typography variant='h2' sx={{ gridColumn: '1 / 3' }}>
          Team Brainstorm
        </Typography>
        <Typography sx={{ marginBottom: SMALL_MARGIN }}>
          To optimize efficiency given our limited time frame, I wanted to lead
          the team in a speed brainstorming session to fully explore all
          possible solutions. I introduced the team to the concept of creating
          “How Might We’s” and the purpose of ideation sketching based on these
          questions. Following a demonstration of how to run through this
          process using Miro, we began ideating.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridColumnGap: '10px'
          }}
        >
          <Box
            component='img'
            src={require('../images/how_might_wes.jpg')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'how might we post it notes',
                image: 'how_might_wes.jpg'
              })
            }
          />
          <Box
            component='img'
            src={require('../images/email_tool_sketches.jpg')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            onClick={() =>
              openFullScreen({
                alt: 'email tool wireframe sketches',
                image: 'email_tool_sketches.jpg'
              })
            }
          />
        </Box>
      </PageSection>
      {/* <PageSection>
        <Typography variant='h2'>Developer Constraints</Typography>
        <Typography>
          Following this brainstorm, we evaluated three possible solutions to
          decide which option was most feasible to build within the time frame
          while still providing the best user experience.
        </Typography>
        <Option
          title={'Rich Text Editor from Scratch'}
          img={'image goes here'}
          text={
            'The website would handle both filtering recipients and email composition and then use Amazon SES to send them out.'
          }
          pros={'pros'}
          cons={'cons'}
        />
        <Option
          title={'Rich Text Editor from Scratch'}
          img={'image goes here'}
          text={
            'The website would handle both filtering recipients and email composition and then use Amazon SES to send them out.'
          }
          pros={'pros'}
          cons={'cons'}
        />
        <Option
          title={'Rich Text Editor from Scratch'}
          img={'image goes here'}
          text={
            'The website would handle both filtering recipients and email composition and then use Amazon SES to send them out.'
          }
          pros={'pros'}
          cons={'cons'}
        />
      </PageSection> */}
      <PageSection>
        <Typography variant='h2'>User Flow</Typography>
        <Typography>We decided</Typography>
        <Box
          component='img'
          alt='email tool screenshot'
          src={require('../images/email_user_flow.jpg')}
          sx={{
            gridColumn: '1/3',
            width: '100%',
            borderRadius: '8px',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            openFullScreen({
              alt: 'email tool user flow',
              image: 'email_user_flow.jpg'
            })
          }
        />
        <Box
          component='img'
          alt='email tool screenshot'
          src={require('../images/12_2_email_tool_wireframe.png')}
          sx={{
            gridColumn: '1/3',
            width: '100%',
            borderRadius: '8px',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          onClick={() =>
            openFullScreen({
              alt: 'email tool wire frame',
              image: '12_2_email_tool_wireframe.png'
            })
          }
        />
      </PageSection>
      <PageSection>
        <Typography variant='h2'>Takeaways</Typography>
        <Typography>
          Through this design sprint, I have gained a much better understanding
          of the time it takes to complete certain tasks, as well as a stronger
          ability to make quick decisions in prioritizing features. I feel
          better equiped to set achievable goals within the given timeframe.
        </Typography>
      </PageSection>
    </PageHolder>
  )
}

export default EmailToolContainer
