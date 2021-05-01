import React from 'react'
import './ShortenURL.css'
import urlLists from './urlLists.js'

const ShortenURL = () => {
    return (
        <div className="shorten-container">
            <div className="shorten-box">
                <form>
                    <div className="input-txt">
                        <input type="text" name="shorten" id="shorten" placeholder="Shorten a link here.."/>
                        <label>Please add a link.</label>
                    </div>
                    <input type="submit" value="Shorten It!"/>
                </form>
            </div>
            <div className="url-block">
                <div className="url-text">
                    <h3>https://google.com</h3>
                </div>
                <div className="action-col">
                    <h3>https://re.link/hdjhsj</h3>
                    <button>Copy</button>
                </div>
            </div>
            <div className="url-block">
                <div className="url-text">
                    <h3>https://google.com</h3>
                </div>
                <div className="action-col">
                    <h3>https://re.link/hdjhsj</h3>
                    <button>Copy</button>
                </div>
            </div>
        </div>
    )
}

export default ShortenURL
