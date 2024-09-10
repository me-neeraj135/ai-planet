import React, { useState, useContext } from 'react'

import HeroSection from '../components/HeroSection'
import ChallengeCard from '../components/ChallangeCard'
import SearchFilter from '../components/SearchFilter'
import '../style/home.css'

import Statics from '../components/Statics'
import EventCard from '../components/EventCard'
import ChallengeForm from '../components/ChallengeForm'

import AI from '../assets/icons/Group 1000002515.svg'
import DataScience from '../assets/icons/Group 1000002516.svg'
import AiChallange from '../assets/icons/Group 1000002518.svg'
import bi_image from '../assets/icons/bi_image-fill.svg'
import IdentificationCard from '../assets/icons/IdentificationCard.svg'
import usersIcon from '../assets/icons/Vector.svg'
import Robot from '../assets/icons/Robot.svg'

import { HackathonContext } from '../hackathonContex'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const { hackathons } = useContext(HackathonContext)

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <main>
      <section className="heroSection">
        <div className="container ">
          <HeroSection />
        </div>
      </section>
      <section className="toolAndCountSection">
        <div className="container ">
          <Statics />
        </div>
      </section>
      <section className="challengeCardSection">
        <div className=" container ">
          <ChallengeCard />
        </div>
      </section>
      <section className="searchFilterSection">
        <div className="container ">
          <SearchFilter searchQuery={searchQuery} handleSearch={handleSearch} />
        </div>
      </section>
      <section className="eventCardSection">
        <div className="container  flex align-center justify-cnt-center ">
          <div className="cardsWrapper  ">
            {hackathons?.length > 0 ? (
              hackathons.map((h) => <EventCard key={h.id} hackathon={h} />)
            ) : (
              <p>No challenges available.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
