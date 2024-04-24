//making a fetch request for all activities
//https://www.strava.com/api/v3/athlete/activities?access_token=277bc08d2d53600fbd22a05598fa1d479e3f7f24

function getAllActivites() {
    const activities_link = "https://www.strava.com/api/v3/athlete/activities?access_token=277bc08d2d53600fbd22a05598fa1d479e3f7f24"
    fetch(activities_link)
        .then((res) => console.log(res.json))
}

getAllActivites();
