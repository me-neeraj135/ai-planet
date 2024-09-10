import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import bi_image from '../assets/icons/bi_image-fill.svg'
import IdentificationCard from '../assets/icons/IdentificationCard.svg'
import usersIcon from '../assets/icons/Vector.svg'
import Robot from '../assets/icons/Robot.svg'
import '../style/challengeCard.css'
const data = [
  {
    icon: bi_image,
    title: ' Lorem ipsum dolor sit amet ',
    detail:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia facilis animi quibusdam accusamus vitae quasi eveniet reiciendis! Molestias quae laborum atque quod',
  },
  {
    icon: IdentificationCard,
    title: ' Lorem ipsum dolor sit amet ',
    detail:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia facilis animi quibusdam accusamus vitae quasi eveniet reiciendis! Molestias quae laborum atque quod',
  },
  {
    icon: usersIcon,
    title: ' Lorem ipsum dolor sit ',
    detail:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia facilis animi quibusdam accusamus vitae quasi eveniet reiciendis! Molestias quae laborum atque quod',
  },

  {
    icon: Robot,
    title: ' Lorem ipsum dolor sit',
    detail:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia facilis animi quibusdam accusamus vitae quasi eveniet reiciendis! Molestias quae laborum atque quod',
  },
]
export default function ActionAreaCard() {
  return (
    <>
      <h2 className="tex-center challengeCardHeading">
        Why Particiapate in AI <span className="spanH2">ChallangeCard?</span>
      </h2>
      <div className=" justify-cnt-center flex-wrap challengeCardWrapper">
        {data.map((data, index) => {
          return (
            <Card
              key={index + 1}
              sx={{
                maxWidth: 542,
                height: 276,
                backgroundColor: 'var(--card-background)',
              }}
            >
              <CardContent
                sx={{
                  maxWidth: 471,
                  height: 155,
                  backgroundColor: 'var(--card-background)',
                }}
              >
                <img
                  width="43"
                  height="43"
                  src={data.icon}
                  alt="green iguana"
                />
                <p className="cardTitle">{data.title}</p>
                <p className="cardDetail">{data.detail}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </>
  )
}
