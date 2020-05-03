import React from "react"
import useTwitchVideos from "../hooks/useTwitchVideos"
import setTwitchImageSize from "../utils/setTwitchImageSize"
import Styled from "../styles/twitch.styles.js"
import format from "date-fns/format"

const Twitch = () => {
  const [videos] = useTwitchVideos()

  return (
    <Styled.TwitchContainer>
      <iframe
        src="https://player.twitch.tv/?channel=themusicplease&parent=https://themusicplease.com"
        height={600}
        width={800}
        frameborder={0}
        allowFullScreen={true}
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
