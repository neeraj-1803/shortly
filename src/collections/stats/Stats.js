import './Stats.css'
import brandImg from '../../images/icon-brand-recognition.svg'
import recordImg from '../../images/icon-detailed-records.svg'
import customImg from '../../images/icon-fully-customizable.svg'

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="stats-text">
                <h2>Advance Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="stats-grid">
                <div className="grid1 gridid1">
                    <div className="grid1-img">
                        <img src={brandImg} alt=""/>
                    </div>
                    <div className="grid1-text">
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className="grid1 grid2">
                    <div className="grid1-img">
                        <img src={recordImg} alt=""/>
                    </div>
                    <div className="grid1-text">
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className="grid1 grid3">
                    <div className="grid1-img">
                        <img src={customImg} alt=""/>
                    </div>
                    <div className="grid1-text">
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
