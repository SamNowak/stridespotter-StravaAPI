//https://www.strava.com/oauth/token?client_id=&client_secret=&refresh_token=305c2ace0e6e1c5830cfee115f47200b837773e3&grant_type=refresh_token
const super_link = "https://www.strava.com/oauth/token"

//making a fetch request for all activities
//https://www.strava.com/api/v3/athlete/activities?access_token=
function getAllActivites(res) {
    res.access_token = undefined;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}


//getting new access token
function reAuthorize(){
    fetch(super_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: '122561',
            client_secret: 'ffeb9025442e924abee07eb17cc98b976e76b7b4',
            refresh_token: '305c2ace0e6e1c5830cfee115f47200b837773e3',
            grant_type: 'refresh_token',

        })
    }).then(res => res.json())
        .then(res => getAllActivites(res))
}

reAuthorize();
