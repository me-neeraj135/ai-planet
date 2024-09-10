import React, { useEffect, useState, useContext } from 'react'
import '../style/eventCard.css'
import { HackathonContext } from '../hackathonContex'
import { useNavigate } from 'react-router-dom'

const EventCard = ({ hackathon }) => {
  const navigate = useNavigate()
  const {
    id,
    challengeName,
    startDate,
    endDate,
    description,
    image,
    levelType,
  } = hackathon

  const {
    getChallengeStatus,
    calculatTimeLeft,
    timeLeft,
    hackathons,
  } = useContext(HackathonContext)

  console.log('hk', hackathon, timeLeft)

  useEffect(() => {
    // Remove or replace with actual condition if necessary
    const intervalId = setInterval(() => {
      calculatTimeLeft({ startDate, endDate })
    }, 1000)

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [startDate, endDate, calculatTimeLeft])

  const handleParticipate = (id) => {
    // Navigate to the specific hackathon details page when the button is clicked
    navigate(`/hackathon/${id}`)
  }

  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://via.placeholder.com/400x200.png" // Replace with actual image source
          alt="Event"
        />
      </div>
      <div className="card-content">
        <span className="cardBadge">
          {getChallengeStatus(startDate, endDate)}
        </span>
        <h4>{challengeName}</h4>
        <p className="countdown-title">
          {timeLeft?.days === 0 ? 'Starts in' : 'Ends in'}
        </p>
        <div className="countdown-timer">
          <div>
            <span>{String(timeLeft?.days).padStart(2, '0')}</span>
            <small>Days</small>
          </div>
          <div>
            <span>{String(timeLeft?.hours).padStart(2, '0')}</span>
            <small>Hours</small>
          </div>
          <div>
            <span>{String(timeLeft?.minutes).padStart(2, '0')}</span>
            <small>Mins</small>
          </div>
          <div>
            <span>{String(timeLeft?.seconds).padStart(2, '0')}</span>
            <small>Secs</small>
          </div>
        </div>
        <button
          className="participate-button"
          onClick={() => handleParticipate(id)}
        >
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default EventCard
