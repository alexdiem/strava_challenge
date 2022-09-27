import axios from "axios"
import React from "react"
import { useSearchParams } from "react-router-dom"

export function handleStravaLogin() {
    const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID
    const redirectUri = process.env.REACT_APP_STRAVA_REDIRECT + '/callback'
    const scope = "profile:read_all,activity:read"
    const authrorizeUrl = `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUri}/exchange_token&approval_prompt=force&scope=${scope}`

    window.open(
        authrorizeUrl,
        "_self"
    )
  }


export function SegmentChallenge() {
    const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID
    const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET

    const [searchParams] = useSearchParams()
    const code = searchParams.get('code')
    const scope = searchParams.get('scope')

    const tokenRequestUrl = `https://www.strava.com/api/v3/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&code=${code}&grant_type=authorization_code`
    console.log(tokenRequestUrl)

    let res = axios.post(tokenRequestUrl).then(function(response) {
        return response
    })
    console.log(res)
    return (
        <div>
            <p>Congrats, you have successfully logged in.</p>
        </div>
    )
}


export const exchangeToken = (str: string) => {
    return str.split("&")[1].slice(5);
}