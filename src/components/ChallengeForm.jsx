import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { GoArrowRight } from 'react-icons/go'
import { BiSolidCloudUpload } from 'react-icons/bi'
import imgIcon from '../assets/icons/bi_image-fill.svg'
import { HackathonContext } from '../hackathonContex'
import '../style/challengeForm.css'

const ChallengeForm = () => {
  const [challengeName, setChallengeName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [levelType, setLevelType] = useState('Easy')

  const { id } = useParams() // get the id from the URL if available
  const navigate = useNavigate()

  const { hackathons, addHackathon, updateHackathon } = useContext(
    HackathonContext,
  )

  // Fetch existing hackathon details if we are editing
  useEffect(() => {
    if (id) {
      const existingHackathon = hackathons.find((hack) => hack.id === id)
      if (existingHackathon) {
        setChallengeName(existingHackathon.challengeName)
        setStartDate(existingHackathon.startDate)
        setEndDate(existingHackathon.endDate)
        setDescription(existingHackathon.description)
        setImage(existingHackathon.image)
        setLevelType(existingHackathon.levelType)
      }
    }
  }, [id, hackathons])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }

  const handleUploadClick = () => {
    document.getElementById('hiddenFileInput').click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newHackathon = {
      challengeName,
      startDate,
      endDate,
      description,
      image,
      levelType,
    }

    if (id) {
      // Update existing hackathon
      updateHackathon(id, newHackathon)
    } else {
      // Add new hackathon
      addHackathon(newHackathon)
    }

    // Reset form fields after submission
    setChallengeName('')
    setStartDate('')
    setEndDate('')
    setDescription('')
    setImage(null)
    setLevelType('Easy')

    navigate('/')
  }

  return (
    <div>
      <div className="challengeFormH2">
        <h2>{id ? 'Update Challenge' : 'Create Challenge'}</h2>
      </div>
      <div className="container">
        <form className="challenge-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Challenge Name</label>
            <input
              type="text"
              value={challengeName}
              onChange={(e) => setChallengeName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Add Start date"
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Add End date"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="custom-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            {id ? (
              <div className="image-preview">
                {image ? (
                  <img className="imgPreview" src={image} alt="Preview" />
                ) : (
                  <p>No image</p>
                )}

                <div className="admin_change_imagePreviewBox">
                  <img
                    className="adminChangeImage"
                    src={imgIcon}
                    alt="Image_icon"
                  />
                  <button type="button" className="change-image">
                    change Image
                  </button>
                  <GoArrowRight className="arrowIcon" />
                </div>
              </div>
            ) : (
              <div className="upload-button" onClick={handleUploadClick}>
                <span>Upload</span>
                <BiSolidCloudUpload size={20} />
              </div>
            )}

            {/* Hidden File Input */}
            <input
              id="hiddenFileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="form-group levelBox">
            <label>Level Type</label>
            <select
              value={levelType}
              onChange={(e) => setLevelType(e.target.value)}
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            {id ? 'Update Challenge' : 'Create Challenge'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChallengeForm
