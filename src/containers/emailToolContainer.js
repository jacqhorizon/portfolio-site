import React from 'react'
import PageHolder from '../components/pageHolder'
import { Box, Typography } from '@mui/material'

const EmailToolContainer = () => {
  //Grouping selection: I need to be able to select email recipient groupings by location, subscription, activity, and tags. I also need the freedom to mix and match groupings as needed.
  //Rich Text: I need to be able to format emails to include hyperlinks, basic text formatting, and pictures. If I could have something like the Gmail editor that would be ideal.
  return (
    <PageHolder
      id='email-tool'
      title='Email Tool'
      subTitle={
        <>
          <Typography>
            <b>Duration:</b> Two weeks
          </Typography>{' '}
          <Typography>
            <b>Role: </b>Design sprint lead, designer, front end development
          </Typography>
        </>
      }
    >
      <Typography>
        As quickly as possible, create a tool that will allow instructors to
        send emails to specific groups of users based on which classes they are
        taking
      </Typography>
      {/* <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Typography>
          <b>The Task: </b>
          <br />
          As quickly as possible, create a tool that will allow instructors to
          send emails to specific groups of users based on which classes they
          are taking <br />
          <b>The approach: </b> <br />A design sprint with a focus on
          prioritizing user pain points to design and ship a functioning tool
          quickly and efficiently
        </Typography>
        <Typography>
          <b>The team: </b>
          <br />
          <ul>
            <li>Myself, design sprint facilitator and lead designer and front end development</li>
            <li>Sam,lead developer and database expert </li>
            <li>
              George, the boss - the connection between developers and
              instructors
            </li>
          </ul>
        </Typography>
      </Box> */}
      <Box
        component='img'
        src={require('../images/email_tool.png')}
        sx={{ width: '100%', borderRadius: '8px' }}
      />

      <Typography variant='h2' sx={{ gridColumn: '1/3' }}>
        Understanding Instructor Needs
      </Typography>
      <Typography sx={{ gridColumn: '1/3' }}>
        To start, we evaluated the current process for sending out emails and
        interviewed instructors. We asked instructors about their frustrations
        with the current email system and gathered information about the
        specificity they desired.
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '20% auto' }}>
        <Typography>User Icon</Typography>
        <Typography>
          Currently, I only have the option to email an entire subscription
          group. I need to be able to select email recipient groupings by
          location, subscription, activity, and tags. I also need the freedom to
          mix and match groupings as needed.
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '20% auto' }}>
        <Typography>User Icon</Typography>
        <Typography>
          I need to be able to format emails to include hyperlinks, basic text
          formatting, and pictures. If I could have something like the Gmail
          editor that would be ideal.
        </Typography>
      </Box>

      {/* <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Typography sx={{ gridColumn: '1/3' }}>
          To start, we evaluated the current process for sending out emails and
          interviewed instructors. We discussed who most frequently used the
          email tool and for what purposes. The instructors highlighted existing
          pain points, with the main two being the lack of rich text editing and
          the inability to select a wide range of specific recipient groups. The
          instructors also referenced existing email tools such as Gmail and we
          discussed what was successful about those. From this discussion, we
          decided to focus on the following priorities:
        </Typography>
        <Typography>
          Instructors need to be able to select who the emails are going to with
          the following groupings, from a single source on the website. -
          Everyone with an active membership - Everyone with an active
          membership at a specific location - Everyone enrolled in a specific
          activity - Everyone on a specific team
        </Typography>
        <Typography>
          Instructors need to be able to easily add hyperlinks, basic
          formatting, and pictures. In certain cases, instructors may be copying
          and pasting text from a different document
        </Typography>
      </Box> */}
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
        id='come-up-with-cool-title'
      >
        <Typography variant='h2' sx={{ gridColumn: '1 / 3' }}>
          Come Up With Cool Title
        </Typography>
        <Typography>
          We were able to get a pretty solid idea of what we needed to build in
          this tool from speaking with the instructors, but I wanted to lead the
          team in a brainstorming session to fully explore all possible
          solutions. I introduced the team to the concept of creating “How Might
          We’s” and the purpose of ideation sketching based on these questions.
          Following a demonstration of how to run through this process using
          Miro, we began ideating.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateRows: '50% 50%' }}>
          <Box
            component='img'
            src={require('../images/how_might_wes.jpg')}
            sx={{ width: '100%', borderRadius: '8px' }}
          />
          <Box
            component='img'
            src={require('../images/email_tool_sketches.jpg')}
            sx={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </Box>
      <Typography variant='h2'>Takeaways</Typography>
    </PageHolder>
  )
}

export default EmailToolContainer
