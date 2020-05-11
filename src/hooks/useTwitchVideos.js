import { useCallback, useEffect, useState } from "react"
import axios from "axios"

const useTwitchVideos = () => {
  const [videos, setVideos] = useState([])

  const loadVideos = useCallback(
    () =>
      (async () => {
        try {
          const {
            data: { data: videosRes },
          } = await axios.get(`https://api.twitch.tv/helix/videos`, {
            data: null,
            headers: {
              "Client-ID": process.env.TWITCH_CLIENT_ID,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            params: {
              user_id: process.env.TWITCH_USER_ID,
            },
          })
          setVideos(videosRes)
        } catch (e) {
          // TODO: handle error
          console.error(e)
        }
      })(),
    [setVideos]
  )

  useEffect(() => {
    loadVideos()
  }, [loadVideos])

  return [videos]
}

export default useTwitchVideos
