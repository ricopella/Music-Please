/* eslint-disable */
const axios = require("axios")
exports.handler = async function(event, context) {
    try {
        const tokenResponse = await axios.post(
            `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET_ID}&grant_type=client_credentials`, {
                data: null,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        )

        if (tokenResponse.data) {
            const { access_token } = tokenResponse.data

            const response = await axios.get(`https://api.twitch.tv/helix/streams`, {
                data: null,
                headers: {
                    Accept: "application/json",
                    "Client-ID": process.env.TWITCH_CLIENT_ID,
                    Authorization: `Bearer ${access_token}`,
                },
                params: {
                    user_id: process.env.TWITCH_USER_ID,
                },
            })

            return {
                statusCode: 200,
                body: JSON.stringify({ data: response.data.data }),
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