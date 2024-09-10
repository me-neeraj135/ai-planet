import React, { useContext } from 'react'
import '../style/hackathonDetails.css'
import SkillLevel from '../assets/icons/carbon_skill-level-basic.svg'
import { MdOutlineWatchLater } from 'react-icons/md'
import { HackathonContext } from '../hackathonContex'
import { useParams, useNavigate } from 'react-router-dom' // To fetch hackathonId from the route
const HackathonDetails = () => {
  const { id } = useParams() // Assuming hackathonId is part of the route
  const navigate = useNavigate()
  const {
    getChallengeStatus,
    calculatTimeLeft,
    timeLeft,
    hackathons,
    setHackathons,
  } = useContext(HackathonContext)

  function formatDate(date) {
    const days = (n) => {
      if (n === 1 || n === 21 || n === 31) return `${n}st`
      if (n === 2 || n === 22) return `${n}nd`
      if (n === 3 || n === 23) return `${n}rd`
      return `${n}th`
    }

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const dt = new Date(date)

    const dayWithSuffix = days(dt.getDate())
    const month = months[dt.getMonth()]
    const year = `'${String(dt.getFullYear()).slice(-2)}` // '22 style
    let hours = dt.getHours()
    const minutes = dt.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12 // Convert to 12-hour format

    const time = `${hours}:${minutes} ${ampm}`
    const timeZone = 'India Standard Time' // Hardcoded

    return `${dayWithSuffix} ${month}${year} ${time} (${timeZone})`
  }

  const handleEdit = (id) => {
    // Redirect to the edit page with the hackathonId
    console.log('Edit', id)
    navigate(`/edit/${id}`)
  }

  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((h) => h.id !== id))
    navigate('/')
  }
  // Find the specific hackathon using hackathonId
  const findHackathon = hackathons.find((hackathon) => hackathon.id === id)
  console.log('findHackathon---', id)

  return (
    <>
      {findHackathon ? (
        <div>
          <section className="statusSection">
            <div className="container">
              <section className=" badgeTileWrapper">
                <div className="badgeBar">
                  <MdOutlineWatchLater />
                  <p> {formatDate(findHackathon?.startDate)}</p>
                </div>
                <div className="titleWrapper ">
                  <h1>{findHackathon?.challengeName}</h1>
                  <p className="subTitle">{findHackathon?.description}</p>
                </div>
                <div>
                  <div className="difficulty  ">
                    <img src={SkillLevel} alt="levelImage" />

                    <span>{findHackathon?.levelType}</span>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="btnSection">
            <div className="container flex align-center justify-cnt-sb  ">
              <div className="headingWrapper">
                <h2>Overview</h2>
              </div>
              <div className="buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(findHackathon.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteHackathon(findHackathon.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
          <section className="contentSection">
            <div className="container">
              <div className="content">
                <p>
                  Butterflies are the adult flying stage of certain insects
                  belonging to an order or group called Lepidoptera. The word
                  "Lepidoptera" means "scaly wings" in Greek. This name
                  perfectly suits the insects in this group because their wings
                  are covered with thousands of tiny scales overlapping in rows.
                </p>

                <p>
                  An agency of the Governmental Wildlife Conservation is
                  planning to implement an automated system based on computer
                  vision so that it can identify butterflies based on captured
                  images. As a consultant for this project, you are responsible
                  for developing an efficient model.
                </p>

                <p>
                  Your Task is to build an Image Classification Model using CNN
                  that classifies to which class of weather each image belongs
                  to.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p className="tex-center">Hackathon not found Create new Challenge</p>
      )}
    </>
  )
}

export default HackathonDetails
