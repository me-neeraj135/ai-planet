import React from 'react'
import '../style/statics.css'
import AI from '../assets/icons/Group 1000002515.svg'
import DataScience from '../assets/icons/Group 1000002516.svg'
import AiChallange from '../assets/icons/Group 1000002518.svg'
export default function Statics() {
  return (
    <>
      <div className="aiToolsWrapper">
        <div className="tool">
          <img className="toolImage" src={AI} alt="AI model" />
          <p>
            <span className="countStyle">100K+</span> <br />
            <span className="toolName">AI model submission</span>
          </p>
        </div>

        <div className="vertical"></div>

        <div className="tool">
          <img className="toolImage" src={DataScience} alt="AI model" />
          <p>
            <span className="countStyle">50K+</span> <br />
            <span className="toolName">Data Scientist</span>
          </p>
        </div>

        <div className="vertical"></div>

        <div className="tool">
          <img className="toolImage" src={AiChallange} alt="AI model" />

          <p>
            <span className="countStyle">100K+</span> <br />
            <span className="toolName">AI Challenge hosted</span>
          </p>
        </div>
      </div>
    </>
  )
}
