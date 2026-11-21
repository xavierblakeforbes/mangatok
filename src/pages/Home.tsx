import { useState } from 'react';
import { getTopManga } from "../api/MangaAPI";
import { Manga } from "../types/Manga";
import { useEffect } from "react";
import { getReviews } from '../api/ReviewAPI';
import { Review } from '../types/Review';
import "./Home.css"
const Home = () =>  {
    const top :Manga[] = []
    const reviews : Review[] = []
    const[topManga,updateTopManga] = useState(top)
    const [sampleReviews ,updateSampleReviews] = useState(reviews)

    // Test GET  useEffect( () => {async function getreview () {const review = await getReviews(1234); console.log(review)} getreview()},[])

    useEffect( () => {
        async function fetchTop ()
        {updateTopManga(await getTopManga())} fetchTop()
    }, [])

    useEffect( () => {async function getSampleReviews () {updateSampleReviews(await getReviews(1234))} getSampleReviews()} ,[])
    console.log (sampleReviews)
    return (
        <div className="home-page">
        <h1 className="home-title">Mangatok</h1>
        <h2 className="home-subtitle">Rate and Analyze your favorite manga today!</h2>        
        <h1 className="popular-heading">Popular Manga Today</h1>

        <div className="manga-row">
            {topManga.map((manga) => (
                <div className="manga-card" key={manga.mal_id}>
                    <h3 className="manga-title">{manga.title}</h3>
                    <img className="manga-image" src={manga.images.webp.image_url ?? "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Iconoir_remove-media-image.svg/960px-Iconoir_remove-media-image.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        } />
                    <p className="manga-score">Score: {manga.score ?? "Score not available"}</p>
                </div>
            ))}
        </div>

        </div>
    )
}

export default Home
