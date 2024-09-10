import React, { useState, useContext, useEffect } from 'react'
import '../style/searchFilter.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { HackathonContext } from '../hackathonContex'
const SearchFilter = () => {
  const { hackathons, setHackathons, searchTerm, setSearchTerm } = useContext(
    HackathonContext,
  )
  const [isOpen, setIsOpen] = useState(false)

  // State to track the selected status and level filters
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    level: [],
  })

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsOpen(!isOpen)

  // Handle checkbox change for status
  const handleStatusChange = (e) => {
    const { value, checked } = e.target
    setSelectedFilters((prev) => ({
      ...prev,
      status: checked
        ? [...prev.status, value]
        : prev.status.filter((item) => item !== value),
    }))
  }

  // State for checkboxes
  const [selectedStatuses, setSelectedStatuses] = useState({
    All: true,
    Active: false,
    Upcoming: false,
    Past: false,
  })

  const [selectedLevels, setSelectedLevels] = useState({
    Easy: false,
    Medium: false,
    Hard: false,
  })

  // Handle checkbox change for level

  const handleLevelChange = (e) => {
    const { value, checked } = e.target
    setSelectedFilters((prev) => ({
      ...prev,
      level: checked
        ? [...prev.level, value]
        : prev.level.filter((item) => item !== value),
    }))
  }
  // Handle level change

  const filteredHackathons = hackathons.filter((hackathon) => {
    const statusMatch =
      selectedFilters.status.length === 0 ||
      selectedFilters.status.includes(hackathon.status)

    const levelMatch =
      selectedFilters.level.length === 0 ||
      selectedFilters.level.includes(hackathon.levelType)

    return statusMatch && levelMatch
  })

  // Filter hackathons based on search term

  const filteredHackathonsBasedOnSearch = hackathons.filter((h) => {
    return h?.challengeName.toLowerCase().includes(searchTerm?.toLowerCase())
  })
  useEffect(() => {
    setHackathons(filteredHackathonsBasedOnSearch)
  }, [filteredHackathonsBasedOnSearch])

  return (
    <>
      <h3 className="ChallengesH3">Explore Challenges</h3>
      <div className=" ">
        <div className="searchAndSelectWrapper">
          <div className="searchBox">
            <CiSearch className="search-icon" />

            <input
              type="text"
              className="search-input"
              placeholder="Search ..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={` ${isOpen ? 'fullWidth' : 'filter-container'} `}>
            {/* Filter dropdown header */}
            <button className="filter-header" onClick={toggleDropdown}>
              <h3>Filter</h3>
              <RiArrowDropDownLine className="dropDownIcon" />
            </button>

            {/* Dropdown content */}
            {isOpen && (
              <div className="filter-dropdown">
                {/* Status filter */}
                <div className="filter-section filterStatusSection">
                  <h4>Status</h4>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="All"
                        onChange={handleStatusChange}
                      />
                      All
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Active"
                        onChange={handleStatusChange}
                      />
                      Active
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Upcoming"
                        onChange={handleStatusChange}
                      />
                      Upcoming
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Past"
                        onChange={handleStatusChange}
                      />
                      Past
                    </label>
                  </div>
                </div>

                {/* Level filter */}
                <div className="filter-section">
                  <h4>Level</h4>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Easy"
                        onChange={handleLevelChange}
                      />
                      Easy
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Medium"
                        onChange={handleLevelChange}
                      />
                      Medium
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="Hard"
                        onChange={handleLevelChange}
                      />
                      Hard
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchFilter
