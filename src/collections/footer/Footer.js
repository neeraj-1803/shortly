import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon">
            <h2>Shortly</h2>
            </div>
            <div className="list-items">
                <ul>
                    <li><a href="#">Features</a>
                        <ul>
                            <li><a href="#">Link Shortening</a></li>
                            <li><a href="#">Branded Links</a></li>
                            <li><a href="#">Analytics</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Resources</a>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Company</a>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="social">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    )
}

export default Footer
