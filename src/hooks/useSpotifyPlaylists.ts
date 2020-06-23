import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const useSpotifyPlaylists = () => {
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState(null)

  const loadPlaylists = useCallback(
    () =>
      (async () => {
        try {
          const response = await axios.get(
            `/.netlify/functions/getSpotifyPlaylists`
          )
          console.log("here", response)
          const { data } = await response.data
          setPlaylists(data)
        } catch (e) {
          // TODO: handle error
          console.error(e)
          setError(e)
        }
      })(),
    [setPlaylists]
  )

  useEffect(() => {
    loadPlaylists()
  }, [loadPlaylists])

  return [playlists, error]
}

export default useSpotifyPlaylists
