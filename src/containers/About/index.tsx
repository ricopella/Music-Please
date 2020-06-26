import ContextProvider from "../../provider/ContextProvider"
import Layout from "../../components/Layout"
import React from "react"
import styled from "../../styled"

const AboutContainer = styled.div`
  display: grid;
  grid-template-rows: max-content;
  height: 100%;
  margin: 0 auto;
  max-width: 62.25rem;
  min-height: 100%;
  padding: 0 2rem;
  width: 100%;
`

const AboutBody = styled.section`
  display: grid;
  grid-template-rows: 1fr;
`

const P = styled.p``

const PAGE_TITLE = "ABOUT"

const About = () => {
  return (
    <ContextProvider>
      <Layout title={PAGE_TITLE} hasCenteredLogo>
        <AboutContainer>
          <AboutBody>
            <P>
              The Music Please was founded in 2010 for a self-titled (Music
              Please Radio) weekly program on WRIU 90.3FM Kingston, Rhode Island
              broadcasting from 2010-2015. The collective is made up of DJs,
              audiophiles, producers and artists who were all originally bonded
              by their passion for music. They creatively presented sounds from
              all eras, genres and cultures of music often going on deep dives
              into specific producer, instrumentalist and artist catalogs. The
              radio show was educational, refreshing and for many blended the
              paradoxical gap between the classic and contemporary. Quickly, the
              vibrant curatorial exploits began reaching beyond radio waves and
              the crew found themselves at the helm of the newly accepted
              ‘open-format’ DJ nights that gave nightlife a new, youthful space
              for cultural exchange. The cohort blazed the dance floors of
              parties in Providence, NYC, Boston, Philadelphia, Miami and more -
              everything from underground raves, to bottle service clubs to art
              galleries. Simultaneously, the collective directed sounds for
              James Beard award winning food spaces and international retail
              titans - an area that would quickly have their influence felt
              worldwide. Aligned accompanying music enhances the experience of
              just about anything, and these guys have their finger on how to
              pair it perfectly.
            </P>
            <P>
              Ten years later, the approach that blossomed in those radio days
              stays the same; delivering a timeless curation with stylistic
              execution. The Music Please upholds it’s branding, art and output
              quality to the highest degree therefore all areas of production
              remain in-house. Collectively, they have sustained an influence
              across the sport, technology, retail and music industries through
              projects and developments it’s founders have had involvement in.
            </P>

            <P>
              Now, the collective has evolved the in-house capacity with
              music-centric web and app development. Providing front end, back
              end along with creative direction all in one place allows the
              creative partners to design submersive experiences that uplift the
              artistry and gives the audience a direct connection to content.
            </P>
            <P>
              Whether it’s a party, experience or original production - The
              Music Please Creative Partners are redefining the role of the
              original tastemaker - the DJ. Reach out today and begin shaping
              the immediate future - with flavor!
            </P>
          </AboutBody>
        </AboutContainer>
      </Layout>
    </ContextProvider>
  )
}

export default About
