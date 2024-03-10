import { Nasa, Astronaut, NebulaStar, Molecule } from '../assets'
import { J01, J02, J03 } from '../assets/JupiterN'
import { Mr01, Mr02 } from '../assets/MarsN'
import { Mn01, Mn02, Mn03 } from '../assets/MoonN'
import { N01, N02, N03, N04 } from '../assets/NeptuneN'
import {V001} from '../assets/VenusN'

export const msg1 = () => {
  return (
    [
      [
        {
          id: "1",
          Img: N01,
          Title: "Measuring Neptune's Elusive Radiation Belts Key for Future Exploration",
          subTitle: "",
          date: "25min",
          class: "Nasa"
        },
        {
          id: "2",
          Img: N02,
          Title: "Hubble Telescope Observes Massive New Storm Brewing on Neptune",
          subTitle: "",
          date: "Fri",
          class: "NebulaStar"
        },
        {
          id: "3",
          Img: N03,
          Title: "Voyager 2 Data Reveals Neptune's Unusual Atmospheric Chemistry",
          subTitle: "",
          date: "Tues",
          class: "Astronaut"
        },
        {
          id: "4",
          Img: N04,
          Title: "Exoplanet Discoveries Reshape Our Understanding of Ice Giant Planets Like Neptune",
          subTitle: "",
          date: "Mon",
          class: "Molecule"
        },

      ],
      [
        {
          id: "1",
          Img: Mr01,
          Title: "Did Ancient Mars Have Continents? New Evidence from Perseverance",
          subTitle: "",
          date: "25min",
          class: "Nasa"
        },
        {
          id: "2",
          Img: Mr02,
          Title: "Mars Sample Return Mission Takes Major Step Forward",
          subTitle: "",
          date: "Mon",
          class: "Molecule"
        },

      ],
      [
        {
          id: "1",
          Img: J01,
          Title: "Jupiter's Mysterious Storms",
          subTitle: "",
          date: "Fri",
          class: "NebulaStar"
        },
        {
          id: "2",
          Img: J02,
          Title: "NASA's Juno Probe Reveals Surprising Insights Into Jupiter's Atmosphere",
          subTitle: " ",
          date: '10min',
          class: "Astronaut"
        },
        {
          id: "3",
          Img: J03,
          Title: "Jupiter's Magnetic Field",
          subTitle: "",
          date: "Mon",
          class: "Molecule"
        },

      ],
      [
        {
          id: "1",
          Img: V001,
          Title: "Venus Express Data Reveals Potential Evidence of Active Volcanism",
          subTitle: "",
          date: "25min",
          class: "Nasa"
        },

      ],
      [
        {
          id: "1",
          Img: Mn01,
          Title: "NASA Picks Locations for Artemis Moon Lander and Future Base",
          subTitle: "",
          date: "25min",
          class: "Nasa"
        },
        {
          id: "2",
          Img: Mn02,
          Title: "Bright 'Meteor' Spotted on Moon Was Actually a Rare Meteoroid Impact",
          subTitle: "",
          date: "Fri",
          class: "NebulaStar"
        },
        {
          id: "3",
          Img: Mn03,
          Title: "Lunar Polar Ice Deposits Could Provide Resources for Future Missions",
          subTitle: " ",
          date:"Mon",
          class: "Astronaut"
        },
      ]
    ]
  )
}




