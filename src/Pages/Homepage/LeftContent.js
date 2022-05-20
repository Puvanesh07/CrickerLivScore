import React,{useEffect, useState} from 'react'
import './styles/Leftcontent.css'
import axios from 'axios'

function LeftContent() {
    const [news,setNews] = useState()

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/news/v2/list-by-sport',
            params: {category: '2021020913321411486', page: '1'},
            headers: {
              'x-rapidapi-host': 'livescore6.p.rapidapi.com',
              'x-rapidapi-key': '056a22b0f4mshea0efbf44ab23d2p1349c2jsn2654dfa519cb'
            }
          };
          
          axios.request(options).then(function (response) {
              setNews(response.data.data)
          }).catch(function (error) {
              console.error(error);
          });
    },[1])
    
   

    return (
        <div className="left-container">
            <div className="top-head">
                <h1 className="heading">Cricket News</h1>
                <i className="fas fa-angle-right"></i>
            </div>
            
            {
               news && 
               
               news.slice(0,3).map((sing,index) => (
                    // console.log(sing.image.data.urls.uploaded.gallery)
                    <div key={index} className="news-display">
                        <img src={sing.image.data.urls.uploaded.gallery} className="img"/>
                        <p className="title">{sing.title}</p>
                    </div>
                    
                    ))
            }
        </div>
    )
}

export default LeftContent
