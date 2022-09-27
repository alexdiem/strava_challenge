import React from "react"
import { useSearchParams } from "react-router-dom"

export function handleStravaLogin() {
    const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID
    const redirectUri = process.env.REACT_APP_STRAVA_REDIRECT + '/callback'
    const scope = "profile:read_all,activity:read"
    window.open(
        `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUri}/exchange_token&approval_prompt=force&scope=${scope}`,
        "_self"
    )
  }


export function SegmentChallenge() {
    const [searchParams] = useSearchParams()
    for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        console.log(param, value);
      }
    return (
        <p>Congrats, you have successfully logged in.</p>
    )
}


export const exchangeToken = (str: string) => {
    return str.split("&")[1].slice(5);
}