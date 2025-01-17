import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
    const[articles, setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles)).catch(error=>console.log(error))
    },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
      {articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} desc={news.description} src={news.urlToImage} url={news.url}/>
      })}
      </div>
    </div>
  )
}

export default NewsBoard
