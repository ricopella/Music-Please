import Spacey from '../../images/gif/spacey.gif'
import Footer from '../Footer'
import React, { FC } from 'react'
import SEO, { SEOProps } from '../SEO'
import styled from '../../styled'
import Theme from '../../styles/theme'
import { ThemeProvider } from 'emotion-theming'

interface LayoutProps extends SEOProps {
  bouncy?: boolean
}

const Container = styled.div`
  display: grid;
  grid-row-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  min-height: 100vh;
  position: relative;
  width: 100vw;

  @media only screen and (max-width: ${props => props.theme.media.l}) {
    align-content: center;
  }

  @media only screen and (max-width: ${props => props.theme.media.m}) {
    align-content: center;
  }

  &.bouncy {
    background: url(${Spacey});
    background-size: cover;
    background-position: center top;
  }
`

const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  image,
  bouncy = false,
}) => (
  <React.Fragment>
    <ThemeProvider theme={Theme}>
      <SEO description={description} image={image} title={title} />
      <Container className={bouncy ? "bouncy" : ""}>
        <div>{children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  </React.Fragment>
)

export default Layout
