import './ShortenURL.css'

const urlLists = ({textEntered, shortLink}) => {
    return (
        <div className="url-block">
            <div className="url-text">
                <h3>{textEntered}</h3>
            </div>
            <div className="action-col">
                <h3>{shortLink}</h3>
                <button>Copy</button>
            </div>
        </div>
    )
}

export default urlLists
