import styled from "@emotion/styled"

const TwitchContainer = styled.div `
display: grid;
width: 100vw;
height: 100vh;
`

const TwitchVideosWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  align-content: center;
  justify-items: center;
`

export default {
    TwitchContainer,
    TwitchVideosWrapper
}