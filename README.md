# Flight Tracker

Thank you for checking out my project, it is being created to learn more about working with APIs but to also be able track when a particular aircraft is flying. This is done by querying for the call-sign  of the aircraft and it will then notify when that aircraft is broadcasting ADS-B data. 

### Config data

In order to hide API keys I have created a config file in the parent directory the repository is cloned to. Below is the sample JSON that I used to create my config.

```
{
  "APIKey" : "API_KEY_HERE",
  "host": "adsbexchange-com1.p.rapidapi.com"
}

```