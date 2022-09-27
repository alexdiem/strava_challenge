export function StravaLogin() {
    const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_STRAVA_REDIRECT;
    const scope = "activity:read";
    return (
        window.location = `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUri}/exchange_token&approval_prompt=force&scope=${scope}`
    )
  }