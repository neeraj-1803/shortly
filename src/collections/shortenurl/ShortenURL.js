import React,{useState} from 'react'
import './ShortenURL.css'
import axios from 'axios'
import ListURL from './ListURL';

const ShortenURL = () => {
    const [urlList, setUrlList] = useState(true);
    let data = [];
    const fetchShortURL = async(e) => {
        e.preventDefault();
        let sampdata = {};
        let url = document.getElementById('shorten').value;
        let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        const check = document.getElementById("errorMsg").classList;
        if(regEx.test(url)){
            if(check.length === 0){
                document.getElementById("errorMsg").classList.toggle('hidden');
            }
            const ser = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
            console.log(ser.data);
            const result = ser.data;
            if(result.hasOwnProperty('ok') && result.ok){
                sampdata.full_short_link = result.result.full_short_link;
                sampdata.url = result.result.original_link;
            }
            let toSave = [];
            toSave = JSON.parse(localStorage.getItem('session')) || [];
            toSave.push(sampdata);
            localStorage.setItem('session', JSON.stringify(toSave));
            data = JSON.parse(localStorage.getItem('session'));
            console.log(data);
            //populate the data in a dynamic way
            setUrlList(true);
        }else{
            //invalid url
            if(check.length > 0){
                document.getElementById("errorMsg").classList.toggle('hidden');
            }
        }
    }
    return (
        <div className="shorten-container">
            <div className="shorten-box">
                <form>
                    <div className="input-txt">
                        <input type="text" name="shorten" id="shorten" placeholder="Shorten a link here.."/>
                        <label className="hidden" id="errorMsg">Please add a link.</label>
                    </div>
                    <input type="submit" value="Shorten It!" id="submitbtn" onClick={(e)=>fetchShortURL(e)}/>
                </form>
            </div>
            {(urlList)?(<ListURL item={urlList}/>): ''}
        </div>
    )
}

export default ShortenURL
