import React from 'react'
import PageHolder from '../components/pageHolder'
import { Box, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'

const DesignRefreshContainer = () => {
  const SMALL_MARGIN = '20px'
  const PageSection = (props) => {
    return (
      <Box id={props.id} sx={{ marginBottom: '10vh', ...props.sx }}>
        {props.children}
      </Box>
    )
  }

  return (
    <PageHolder id='design-refresh' title='Design Refresh'>
      <PageSection
        id='navigation'
        sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
      >
        <Typography sx={{ gridColumn: '1/3' }}>
          One of my main responsibilities was to refresh the website’s design to
          improve it’s user friendliness while also better reflecting the
          company’s brand.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/camp_BEFORE_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>Before</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/camp_AFTER_mockup.png')}
            sx={{
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>After</Typography>
        </Box>
      </PageSection>
      <PageSection
        id='navigation'
        // sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
      >
        <Typography variant='h2'>Navigation</Typography>
        <Typography sx={{ marginBottom: SMALL_MARGIN }}>
          As the website’s features expanded, the navigation system became more
          confusing and maze-like. To streamline the navigation experience, I
          pitched and developed the concept of having two main navigation bars.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            gridTemplateRows: '50% 50%'
          }}
        >
          <Box>
            <Typography variant='h3' display='inline'>
              Primary Navigation
            </Typography>
            <Typography>
              Controls the main site features: Page navigation, login, and cart
            </Typography>
          </Box>
          <Box>
            <Typography variant='h3'>Secondary Navigation</Typography>
            <Typography>
              Controls a specific page’s features: varies depending on the page
            </Typography>
          </Box>
          <Box
            component='img'
            src={require('../images/design_refresh/navbar_screenshot.png')}
            sx={{
              gridColumn: '2/3',
              gridRow: '1/3',
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '20% 20% auto' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              component='img'
              src={require('../images/design_refresh/nav_BEFORE_mobilemockup.png')}
              sx={{
                // gridColumn: '2/3',
                // gridRow: '1/3',
                width: '100%',
                borderRadius: '8px',
                //   height: '250px',
                objectFit: 'cover',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
              // onClick={() =>
              //   openFullScreen({
              //     alt: 'how might we post it notes',
              //     image: 'how_might_wes.jpg'
              //   })
              // }
            />
            <Typography>Before</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              component='img'
              src={require('../images/design_refresh/nav_AFTER_mobilemockup.png')}
              sx={{
                // gridColumn: '2/3',
                // gridRow: '1/3',
                width: '100%',
                borderRadius: '8px',
                //   height: '250px',
                objectFit: 'cover',
                '&:hover': {
                  cursor: 'pointer'
                }
              }}
              // onClick={() =>
              //   openFullScreen({
              //     alt: 'how might we post it notes',
              //     image: 'how_might_wes.jpg'
              //   })
              // }
            />
            <Typography>After</Typography>
          </Box>
          <Typography>There will be text here</Typography>
        </Box>
      </PageSection>
      <PageSection
        id='design-guide'
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          alignItems: 'center'
        }}
      >
        <Typography variant='h2' sx={{ gridColumn: '1/3' }}>
          Design Guide
        </Typography>
        <Typography sx={{ gridColumn: '1/3', marginBottom: SMALL_MARGIN }}>
          Working off of pre existing branding material, I created a basic
          design guide. With these fundamental building blocks established,
          myself and other developers are able to quickly build uniform and
          consistent features.
        </Typography>
        <Box>
          <Typography>
            The color palette and typography guide were designed with the goal
            of creating the simplest experience for users to access information,
            without losing the fun of the brand's aesthetic.
          </Typography>
          {/* <Typography>
            The web color palette was simplified to avoid having too many
            distracting colors throughout the site, while still maintaining a
            fun and childlike aesthetic.
          </Typography>
          <Typography>
            The typography guide was established to make it quicker and easier
            for users to find the info they needed
          </Typography> */}
          <Typography>
            Both these features were integrated into the website using Mui's
            Theme Provider to make it convenient for developers
          </Typography>
        </Box>
        <Box
          component='img'
          src={require('../images/design_refresh/rr_design_guide.png')}
          sx={{
            marginBottom: SMALL_MARGIN,
            // gridColumn: '2/3',
            // gridRow: '1/3',
            width: '100%',
            borderRadius: '8px',
            //   height: '250px',
            objectFit: 'cover',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          // onClick={() =>
          //   openFullScreen({
          //     alt: 'how might we post it notes',
          //     image: 'how_might_wes.jpg'
          //   })
          // }
        />
        <Box>
          I designed and built reusable card components to further streamline
          the user experience. I focused on emphasizing the hierarchy of
          information and sprinkled in some iconography to keep the user
          experience joyful.
        </Box>
        <Box
          component='img'
          src={require('../images/design_refresh/rr_card_ref.png')}
          sx={{
            // gridColumn: '2/3',
            // gridRow: '1/3',
            width: '100%',
            borderRadius: '8px',
            //   height: '250px',
            objectFit: 'cover',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
          // onClick={() =>
          //   openFullScreen({
          //     alt: 'how might we post it notes',
          //     image: 'how_might_wes.jpg'
          //   })
          // }
        />
      </PageSection>
      <PageSection sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <Typography variant='h2' sx={{gridColumn: '1/3'}}>Applying the Designs</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/info_BEFORE_mockup.png')}
            sx={{
              // marginBottom: SMALL_MARGIN,
              // gridColumn: '2/3',
              // gridRow: '1/3',
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>Before</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component='img'
            src={require('../images/design_refresh/info_AFTER_mockup.png')}
            sx={{
              // marginBottom: SMALL_MARGIN,
              // gridColumn: '2/3',
              // gridRow: '1/3',
              width: '100%',
              borderRadius: '8px',
              //   height: '250px',
              objectFit: 'cover',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            // onClick={() =>
            //   openFullScreen({
            //     alt: 'how might we post it notes',
            //     image: 'how_might_wes.jpg'
            //   })
            // }
          />
          <Typography>After</Typography>
        </Box>
      </PageSection>
      <PageSection>
        <Typography variant='h2'>Takeaways</Typography>
      </PageSection>
    </PageHolder>
  )
}

export default DesignRefreshContainer
