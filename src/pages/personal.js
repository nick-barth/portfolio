import React from "react"

import Seperator from "../components/seperator"

export default props => {
  return (
    <div className="personal">
      <div className="personal__content">
        <div className="personal__header">Personal</div>
        <Seperator />
        <div className="personal__description">
          As we all do, I have a intricite and full life outside of productivity
          and capital generation. Here is a brief overview.
        </div>
        <div className="personal__container">
          <h3 className="personal__category">Hobbies</h3>
          <ul className="personal__personal">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cmoreira.net/visited-countries-map/?map=5cde8fc2e1370"
              >
                Travel
              </a>
            </li>
            <li>Squash</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.goodreads.com/user/show/60480445-nick-barth"
              >
                Reading
              </a>
            </li>
            <li>Gym</li>
            <li>Cooking</li>
            <li>
              <a
                target="_blank"
                href="https://www.hackyourfuture.net/"
                rel="noopener noreferrer"
              >
                Volunteering
              </a>
            </li>
          </ul>
        </div>
        <div className="personal__container">
          <h3 className="personal__category">Passions</h3>
          <ul className="personal__personal">
            <li>People</li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/user/1215590034?si=NX0c4GtASiGR5SecTg1LTQ"
                rel="noopener noreferrer"
              >
                Music
              </a>
            </li>
            <li>Social causes</li>
            <li>Being well rounded</li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=npyJ0lECjv0"
              >
                Lovely strolls through gardens
              </a>
            </li>
          </ul>
        </div>
        <div className="personal__container">
          <h3 className="personal__category">Things I like</h3>
          <ul className="personal__personal">
            <li>Laughing</li>
            <li>Public Transport</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reddit.com/user/nickinkorea"
              >
                Reddit
              </a>
            </li>
            <li>Working in cafes</li>
            <li>Sunshine</li>
            <li>Standardization in engineering</li>
            <li>Indiviualism in people</li>
          </ul>
        </div>
        <div className="personal__container">
          <h3 className="personal__category">Things I dislike</h3>
          <ul className="personal__personal">
            <li>Dependencies</li>
            <li>Injustice</li>
            <li>True crime documentaries</li>
            <li>
              People telling me to watch tv shows, I really can't invest 40
              hours into this show, I'm sorry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
