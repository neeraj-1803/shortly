import './ShortenURL.css'
const List = ({data}) => {
    console.log("List-->");
    console.log(data);
    const copyToClipboard = (e) => {
        let short_link = e.target.previousSibling.innerText;
        console.log(short_link);
        navigator.clipboard.writeText(short_link);
    }
    return (
        <div className="url-block">
            <div className="url-text">
                <h3>{data.url}</h3>
            </div>
            <div className="action-col">
                <h3>{data.full_short_link}</h3>
                <button id="copybtn" onClick={(e) => copyToClipboard(e)}>Copy</button>
            </div>
        </div>
    )
}

export default List
