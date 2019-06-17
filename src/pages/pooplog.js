import React, { useState } from "react"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  makeWidthFlexible,
  LineMarkSeries,
  GradientDefs,
  Hint,
} from "react-vis"
import Img from "gatsby-image"

import MapContainer from "../components/map"

const FlexibleXYPlot = makeWidthFlexible(XYPlot)
const poopycolor = "url(#myGradient)"
const gradient = (
  <GradientDefs>
    <linearGradient id="myGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#6F6C0A" />
      <stop offset="100%" stopColor="#7B5804" />
    </linearGradient>
  </GradientDefs>
)

const BarGraphComponent = ({ data }) => {
  const [hoveredNode, setHoveredNode] = useState(false)
  return (
    <FlexibleXYPlot xType="ordinal" margin={{ bottom: 50 }} height={300}>
      {hoveredNode ? (
        <Hint value={hoveredNode}>
          <div className="tooltip">
            <p>{hoveredNode.x}</p>
            <p>{hoveredNode.y}</p>
          </div>
        </Hint>
      ) : null}
      {gradient}
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries
        onValueMouseOver={v => setHoveredNode(v)}
        onValueMouseOut={v => setHoveredNode(false)}
        data={data}
        color={"url(#myGradient)"}
      />
    </FlexibleXYPlot>
  )
}

const LineGraphComponent = ({ data }) => {
  const [hoveredNode, setHoveredNode] = useState(false)
  return (
    <FlexibleXYPlot margin={{ bottom: 50 }} xType="ordinal" height={300}>
      {hoveredNode ? (
        <Hint value={hoveredNode}>
          <div className="tooltip">
            <p>{hoveredNode.x}</p>
            <p>{hoveredNode.y}</p>
          </div>
        </Hint>
      ) : null}
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-90} />
      <YAxis />
      <LineMarkSeries
        data={data}
        color={poopycolor}
        onValueMouseOver={v => setHoveredNode(v)}
        onValueMouseOut={v => setHoveredNode(false)}
      />
    </FlexibleXYPlot>
  )
}

export default props => {
  const volumeBarData = [
    { x: "0 Poops", y: 24 },
    { x: "1 Poop", y: 207 },
    { x: "2 Poops", y: 102 },
    { x: "3 Poops", y: 20 },
    { x: "4 Poops", y: 11 },
  ]

  const locationBarData = [
    { x: "Work", y: 254 },
    { x: "Home", y: 204 },
    { x: "Other", y: 57 },
  ]

  const dayPoopers = [
    { x: "Mon", y: 79 },
    { x: "Tue", y: 77 },
    { x: "Wed", y: 71 },
    { x: "Thu", y: 89 },
    { x: "Fri", y: 72 },
    { x: "Sat", y: 64 },
    { x: "Sun", y: 63 },
  ]

  const daySloshers = [
    { x: "Mon", y: 3.7 },
    { x: "Tue", y: 3.8 },
    { x: "Wed", y: 3.9 },
    { x: "Thu", y: 3.7 },
    { x: "Fri", y: 3.8 },
    { x: "Sat", y: 3.8 },
    { x: "Sun", y: 4.1 },
  ]

  const monthSloshers = [
    { x: "Jan", y: 3.6 },
    { x: "Feb", y: 3.4 },
    { x: "March", y: 3.9 },
    { x: "April", y: 3.8 },
    { x: "May", y: 3.5 },
    { x: "June", y: 3.8 },
    { x: "July", y: 3.9 },
    { x: "Aug", y: 4.1 },
    { x: "Sept", y: 4 },
    { x: "Oct", y: 4.4 },
    { x: "Nov", y: 3.8 },
    { x: "Dec", y: 3.9 },
  ]

  const monthPoopers = [
    { x: "Jan", y: 53 },
    { x: "Feb", y: 48 },
    { x: "March", y: 48 },
    { x: "April", y: 49 },
    { x: "May", y: 38 },
    { x: "June", y: 42 },
    { x: "July", y: 37 },
    { x: "Aug", y: 35 },
    { x: "Sept", y: 45 },
    { x: "Oct", y: 39 },
    { x: "Nov", y: 41 },
    { x: "Dec", y: 40 },
  ]

  const timePoops = [
    { x: "12AM", y: 4 },
    { x: "1AM", y: 8 },
    { x: "2AM", y: 1 },
    { x: "3AM", y: 0 },
    { x: "4AM", y: 2 },
    { x: "5AM", y: 0 },
    { x: "6AM", y: 2 },
    { x: "7AM", y: 0 },
    { x: "8AM", y: 10 },
    { x: "9AM", y: 63 },
    { x: "10AM", y: 93 },
    { x: "11AM", y: 72 },
    { x: "12PM", y: 44 },
    { x: "1PM", y: 40 },
    { x: "2PM", y: 31 },
    { x: "3PM", y: 25 },
    { x: "4PM", y: 19 },
    { x: "5PM", y: 10 },
    { x: "6PM", y: 6 },
    { x: "7PM", y: 18 },
    { x: "8PM", y: 24 },
    { x: "9PM", y: 16 },
    { x: "10PM", y: 16 },
    { x: "11PM", y: 10 },
  ]

  return (
    <React.Fragment>
      {daySloshers.map(p => {
        return (
          <Img
            className="poop"
            key={p.x}
            style={{ position: "fixed" }}
            fluid={props.data.poop.childImageSharp.fluid}
          />
        )
      })}
      <div className="pooplog">
        <div className="pooplog__content">
          <h1 className="pooplog__header">Pooplog</h1>
          <div className="pooplog__description">
            A deep dive into a year on the toilet
          </div>
          <div className="pooplog__numbers-container">
            <div className="pooplog__numbers">
              <div className="pooplog__number">515</div>
              <div className="pooplog__number-text">Total Poops</div>
            </div>
            <div className="pooplog__numbers">
              <div className="pooplog__number">1.41</div>
              <div className="pooplog__number-text">Poops per day </div>
            </div>
            <div className="pooplog__numbers">
              <div className="pooplog__number">40</div>
              <div className="pooplog__number-text">Unique Toilets</div>
            </div>
            <div className="pooplog__numbers">
              <div className="pooplog__number">3.89</div>
              <div className="pooplog__number-text">Average Consistancy</div>
            </div>
          </div>
          <h2 className="pooplog__subheader">Methodology</h2>
          <div className="pooplog__text">
            Over the course of a year, from 1/20/15 to 1/20/16, every instance
            of defecation was recorded in a spreadsheet. I defined defecation: a
            sit, a loaf, a wipe, and a flush. Courtesy flushes, half an hour
            slugfests, and multiple wipe and poo sessions did not increase the
            tally more than once. I recorded four statistics regarding each
            poop: date, time, location, and consistency. Consistency was
            measured via eyeball, in reference to the{" "}
            <a href="https://en.wikipedia.org/wiki/Bristol_stool_scale">
              Bristol Stool Scale
            </a>
            . Raw data can be found{" "}
            <a href="https://docs.google.com/spreadsheets/d/13KKdGDYjxb085kSAB_LGJ7zIiQdtTBZD37K4uf4JH9g/edit?usp=sharing">
              here
            </a>
            . Without further ado, let's get into this mess, my own tales of
            umber.
          </div>
          <section>
            <h2 className="pooplog__subheader">I. Volume</h2>
            <div className="pooplog__charts">
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">I.a Poops per day</h3>
                <BarGraphComponent data={volumeBarData} />
              </div>
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">I.b Location</h3>
                <BarGraphComponent data={locationBarData} />
              </div>
            </div>
            <div className="pooplog__text">
              I.a - Predictably, my most frequent poop locations occurred at
              work, with a secondary location of my home. Assuming each poop
              averaged about 5 minutes, at NYS minimum wage (8.75), pooping on
              the company dime will have made me around $185.20 this year. To
              see the top 5 non-home and non-work locations, please click on the
              "Other" slice of the pie graph.
              <br />
              <br />
              I.b - Shows the number of n-poop days I had this year. With an
              average of 1.4, it's not surprising that most frequently 1 poop
              days occurred, followed by 2 poop days. Strangely enough I did go
              through multiple days, 24 to be exact, with 0 poops. The smallest
              slice of our graph are days I remember most fondly, 4 poop days,
              these miasma filled days were usually caused by a combination of
              binge drinking, sickness, or an unrepentant love for curry.
            </div>
          </section>
          <section>
            <h2 className="pooplog__subheader">II. Time</h2>
            <div className="pooplog__charts">
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">
                  II.a Poop Volume by Day
                </h3>
                <BarGraphComponent data={dayPoopers} />
              </div>
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">
                  II.b Poop Consistancy by Day
                </h3>
                <LineGraphComponent data={daySloshers} />
              </div>
            </div>
            <div className="pooplog__charts">
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">
                  II.c Poop Volume by Month
                </h3>
                <BarGraphComponent data={monthPoopers} />
              </div>
              <div className="pooplog__chartwrapper">
                <h3 className="pooplog__chart-title">
                  II.d Poop Consistancy by Month
                </h3>
                <LineGraphComponent data={monthSloshers} />
              </div>
            </div>
            <div className="pooplog__text">
              II.a & II.b - Here we really start to see a trend forming. A
              skyrocket in the looseness of my stool on Sunday correlates to my
              habit of having more than a few drinks on Saturday nights. Poops
              are fairly consistent during the week, most likely due to
              predictable coffee consumption. We also notice a slight swoon
              during Friday and the weekend, when I generally have better things
              to do than poop!
              <br />
              <br />
              II.c & II.d - I averaged 42 poops per month, with a high of 53
              (January) and a low of 35 (August). The inconsistencies, taking
              into account the differences of days in a month, I found expected.
              The average consistency also varied wildly, with a high of 4.4
              (October was a sloppy month), and a low of 3.5 in May. The only
              trend that seemed to hold true was a higher volume of poops during
              colder months. I attribute this to more leafy greens and fresh
              fruit consumed during summer, and more hearty meals and more
              indoor time during the winter.
            </div>
          </section>
          <section>
            <h2 className="pooplog__subheader">III. Habits</h2>
            <div className="pooplog__charts">
              <div className="pooplog__chartwrapper pooplog__chartwrapper--single">
                <h3 className="pooplog__chart-title">III.a Poops by hour</h3>
                <BarGraphComponent data={timePoops} />
              </div>
            </div>
            <div className="pooplog__text">
              III.a - Predictably, my most frequent poops came during daylight
              hours, with the hour of 10-11 dominating my fecal frequency with
              93 poops. We've separated the weekday and weekend poops to
              highlight the difference stability makes, specifically routine
              coffee drinking at around 10 o'clock. More surprising was the
              uptick of poops after 19:00, especially after hitting the near low
              of six 18:00 poops, of which, four came on the weekend. One could
              infer that this was my cooking and eating time, after returning
              home from work.
              <br />
            </div>
          </section>
          <section>
            <h2 className="pooplog__subheader">IV. Locations</h2>
            <div className="pooplog__charts">
              <div className="pooplog__chartwrapper pooplog__chartwrapper--single pooplog__chartwrapper--map">
                <h3 className="pooplog__chart-title">IV.a Map of Locations</h3>
                <MapContainer />
              </div>
            </div>
            <div className="pooplog__text">
              IV.a - I mapped a majority of the 40 different toilets that were
              blessed with my precious cheeks this year. Poop location of the
              year goes to the Museum of Modern Art in New York, which had
              exquisite granite flooring, perfect stall height, and a very
              generous bowl and seat. Worst poop location of the year goes to
              Milkies Elmwood Lounge. To be fair, I never learned my lesson, and
              ended up there 3 times. At least I could hear the open mic comedy
              set from my ivory throne.
              <br />
            </div>
          </section>
          <section>
            <h2 className="pooplog__subheader">V. Conclusion</h2>
            <div className="pooplog__text">Poop is funny. I'm an idiot.</div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    poop: file(relativePath: { eq: "sadpoop.png" }) {
      childImageSharp {
        fluid(maxWidth: 16) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
