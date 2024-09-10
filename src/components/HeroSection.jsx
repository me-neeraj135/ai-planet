import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../style/herosection.css'
import '../style/global.css'
import robot from '../assets/icons/PicsArt_04-14-04.42 1.svg'
import Statics from './Statics'
import ChallengeForm from './ChallengeForm'

export default function HeroSection() {
  const navigate = useNavigate()

  const createChallenge = () => {
    navigate('/create-challenge')
  }
  return (
    <div className="flex">
      <div className="heroLeft">
        <div className="vLine"></div>
        <div className="titleBox">
          <h2 className="heroTitle">Lorem ipsum dolor sit amet consectetur,</h2>
          <p className="heroText mg-tb">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            facilis numquam accusantium iste. Pariatur perferendis qui sint
            repellendus saepe enim sit distinctio magnam. Temporibus vel,
            aliquid molestiae veritatis accusantium vitae?
          </p>
          <button className="heroBtn" onClick={createChallenge}>
            Create Challenge
          </button>
        </div>
      </div>
      <div className="heroRight">
        <img src={robot} alt="robot" width="" height="" />
      </div>
    </div>
  )
}
