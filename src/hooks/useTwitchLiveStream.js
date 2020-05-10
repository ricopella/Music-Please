import { useCallback, useEffect, useState } from "react"
import axios from "axios"

const useTwitchLiveStreams = () => {
    const [streams, seStreams] = useState([])

    const loadStreams = useCallback(
        () =>
        (async() => {
            try {
                const {
                    data: { data: streamsRes },
                } = await axios.get(`https://api.twitch.tv/helix/streams`, {
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
                seStreams(streamsRes)
            } catch (e) {
                // TODO: handle error
                console.error(e)
            }
        })(), [seStreams]
    )

    useEffect(() => {
        loadStreams()
    }, [loadStreams])

    return [streams]
}

export default useTwitchLiveStreams