import { createContext, useContext, useState } from "react";

import { v4 as uuid } from "uuid";
export const HackathonContext = createContext(null);

export const HackathonProvider = ({ children }) => {
  const [hackathons, setHackathons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const addHackathon = (hackathon) => {
    const unique_id = uuid();
    const {
      id = unique_id,
      challengeName,
      startDate,
      endDate,
      description,
      image,
      levelType,
    } = hackathon;
    setHackathons([
      ...hackathons,
      { id, challengeName, startDate, endDate, description, image, levelType },
    ]);
  };
  // Function to update an existing hackathon
  const updateHackathon = (id, updatedHackathon) => {
    const updatedHackathons = hackathons.map((hackathon) => {
      if (hackathon.id === id) {
        return { ...hackathon, ...updatedHackathon };
      }
      return hackathon;
    });
    setHackathons(updatedHackathons);
  };

  function getChallengeStatus(sd, ed) {
    const currentTime = new Date(); // Get current date and time
    const startDate = new Date(sd); // Convert startDate string to Date object
    const endDate = new Date(ed); // Convert endDate string to Date object

    // Check status based on startDate and endDate
    if (currentTime < startDate) {
      return "upcoming";
    } else if (currentTime >= startDate && currentTime <= endDate) {
      return "Active";
    } else {
      return "Past";
    }
  }

  const calculatTimeLeft = ({ startDate, endDate }) => {
    const now = new Date(); // Current date and time
    const start = new Date(startDate); // Start date
    const end = new Date(endDate); // End date

    if (now > end) {
      setTimeLeft("Event has ended");
      return;
    }

    const timeDifference = end - now; // Difference in milliseconds

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Set the formatted remaining time

    setTimeLeft({ days, hours, minutes, seconds });
  };

  //   const getHackathonStatus = (hackathon) => {
  //     const now = new Date();
  //     if (new Date(hackathon.endDate) < now) return "past";
  //     if (new Date(hackathon.startDate) > now) return "upcoming";
  //     return "active";
  //   };

  //   const filteredHackathons = hackathons
  //     .filter(
  //       (h) =>
  //         (filterLevel === "all" || h.level === filterLevel) &&
  //         (filterStatus === "all" || getHackathonStatus(h) === filterStatus) &&
  //         (searchTerm === "" ||
  //           h.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //     )
  //     .sort((a, b) =>
  //       sortOrder === "newest"
  //         ? new Date(b.startDate) - new Date(a.startDate)
  //         : new Date(a.startDate) - new Date(b.startDate)
  //     );
  return (
    <HackathonContext.Provider
      value={{
        hackathons,
        timeLeft,
        setHackathons,
        addHackathon,
        updateHackathon,

        getChallengeStatus,
        calculatTimeLeft,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </HackathonContext.Provider>
  );
};
