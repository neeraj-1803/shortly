import React from 'react'
import workingImg from '../../images/illustration-working.svg'
import './HeroContainer.css'

const HeroContainer = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1>More than just<br></br>shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <div className="hero-right">
                <img src={workingImg} alt="Working Illustration Shortly"/>
            </div>
        </div>
    )
}

export default HeroContainer
