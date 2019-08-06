import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import Poop from "../../assets/imgs/poop.svg"

export class MapContainer extends React.Component {
  render() {
    const markers = [
      {
        position: {
          lat: 42.892424,
          lng: -78.871549,
        },
        title: "Town Ballroom",
      },
      {
        position: {
          lat: 42.915547,
          lng: -78.889803,
        },
        title: "Pho Dollar",
      },
      {
        position: {
          lat: 42.938835,
          lng: -78.882346,
        },
        title: "Wegmans",
      },
      {
        position: {
          lat: 42.912071,
          lng: -78.876872,
        },
        title: "Thirsy Buffalo",
      },
      {
        position: {
          lat: 42.89457,
          lng: -78.868439,
        },
        title: "Work",
      },
      {
        position: {
          lat: 42.964949,
          lng: -78.7721,
        },
        title: "Parents",
      },
      {
        position: {
          lat: 42.911461,
          lng: -78.877383,
        },
        title: "Milkies",
      },
      {
        position: {
          lat: 40.76149,
          lng: -73.977632,
        },
        title: "MoMA",
      },
      {
        position: {
          lat: 43.65258,
          lng: -79.398615,
        },
        title: "Chinatown Toronto",
      },
      {
        position: {
          lat: 41.942873,
          lng: -87.67751,
        },
        title: "Chicago",
      },
      {
        position: {
          lat: 40.437273,
          lng: -79.980915,
        },
        title: "Pittsburgh",
      },
      {
        position: {
          lat: 33.46614,
          lng: -79.099388,
        },
        title: "Litchfield Beach",
      },
      {
        position: {
          lat: 42.923203,
          lng: -78.876828,
        },
        title: "Cafe Aroma",
      },
      {
        position: {
          lat: 42.276178,
          lng: -78.670873,
        },
        title: "Madigans",
      },
      {
        position: {
          lat: 42.827938,
          lng: -78.696278,
        },
        title: "Columns",
      },
      {
        position: {
          lat: 40.757283,
          lng: -73.965424,
        },
        title: "NYC Airbnb",
      },
      {
        position: {
          lat: 42.894987,
          lng: -78.875933,
        },
        title: "Buffalo Club",
      },
      {
        position: {
          lat: 42.903345,
          lng: -78.873207,
        },
        title: "CTG",
      },
      {
        position: {
          lat: 43.021918,
          lng: -78.687792,
        },
        title: "Cousins",
      },
    ]
    return (
      <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{ lat: 42.886386, lng: -78.878176 }}
      >
        {markers.map(marker => {
          return (
            <Marker
              key={marker.title}
              name={marker.title}
              position={marker.position}
              icon={{
                url: Poop,
              }}
            />
          )
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6WHI8q9F11EpsEbOBmaTOZFtjBx0oDME",
})(MapContainer)
