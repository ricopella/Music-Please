/* eslint-disable */
const axios = require("axios")
const qs = require("qs")
exports.handler = async function(event, context) {
    try {
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
                username: process.env.SPOTIFY_CLIENT_ID,
                password: process.env.SPOTIFY_SECRET,
            },
        }
        const data = {
            grant_type: "client_credentials",
        }
        const tokenResponse = await axios.post(
            `https://accounts.spotify.com/api/token`,
            qs.stringify(data),
            headers
        )
        console.log(tokenResponse)

        if (tokenResponse && tokenResponse.data) {
            const { access_token } = tokenResponse.data

            const response = await axios.get(`https://api.spotify.com/v1/users/${process.env.SPOTIFY_USER_ID}/playlists`, {
                data: null,
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
            })
            console.log(response)

            if (response && response.data) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ data: response.data }),
                }
            } else {
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        msg: `NO STREAMS RECEIVED`,
                    }),
                }
            }

        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    msg: `ACCESS TOKEN NOT RECEIVED FROM TWITCH API`,
                }),
            }
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        }
    }
}