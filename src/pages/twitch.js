import React from "react"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import useTwitchVideos from "../hooks/useTwitchVideos"
import setTwitchImageSize from "../utils/setTwitchImageSize"
import Styled from "../styles/twitch.styles.js"
import format from "date-fns/format"

const Twitch = () => {
  const [videos] = useTwitchVideos()

  return (
    <Styled.TwitchContainer>
      <ReactTwitchEmbedVideo
        autoplay
        muted={false}
        theme={"dark"}
        layout="video"
        channel="themusicplease"
      />
      <Styled.TwitchVideosWrapper>
        {(videos || []).map(video => (
          <div key={video.id}>
            <img src={setTwitchImageSize(video.thumbnail_url, 200, 200)} />
            <div>
              Broadcasted Date:{" "}
              {format(new Date(video.published_at), `mm dd yyyy`)}
            </div>
          </div>
        ))}
      </Styled.TwitchVideosWrapper>
    </Styled.TwitchContainer>
  )
}

export default Twitch
