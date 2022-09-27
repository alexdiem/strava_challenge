export function StravaLogin() {
    require('dotenv-webpack').config();
    const stravaClientId = process.env.STRAVA_CLIENT_ID;
    const redirectUri = process.env.STRAVA_REDIRECT;
    const scope = "activities:read";
    return (
        window.location = `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUri}/exchange_token&approval_prompt=force&scope=${scope}`
    )
  }