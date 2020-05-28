import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const useTwitchLiveStreams = () => {
  const [streams, seStreams] = useState([])
  const [error, setError] = useState(null)

  const loadStreams = useCallback(
    () =>
      (async () => {
        try {
          // call netlify lambda function
          const response = await axios.get(
            `/.netlify/functions/getStreamStatus`
          )
          const { data } = await response.data
          seStreams(data)
        } catch (e) {
          // TODO: handle error
          console.error(e)
          setError(e)
        }
      })(),
    [seStreams]
  )

  useEffect(() => {
    loadStreams()
  }, [loadStreams])

  return [streams, error]
}

export default useTwitchLiveStreams
