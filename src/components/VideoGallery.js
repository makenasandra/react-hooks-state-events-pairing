import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import videos from "../data/videos-db.js";
import VideoSection from "./VideoSection.js";

function VideoGallery() {
    const [formData, setFormData] = useState({search:""});
    const [videosToDisplay, setVideosToDisplay] = useState(videos);
    const [orderAsc, setOrderAsc] = useState(true);


    function handleSearchSubmit(e){
        e.preventDefault();
        console.log(formData);
        let filteredVideos = videos.filter(video=> {
            if(!(formData.search)) return true;
            return video.title.toLowerCase().includes(formData.search)})
        setVideosToDisplay(filteredVideos);
        console.log(filteredVideos);
    }
    function handleSearchChange(e){
        setFormData({
            ...formData,
           [e.target.name]: e.target.value.toLowerCase()
        })
        // console.log([e.target.name])
    }
    function handleFilterCLick(e){
        setOrderAsc(!orderAsc);
       
        if(orderAsc === true){
            setVideosToDisplay(videosToDisplay.sort((a, b) => a.views - b.views));
        } else{
            setVideosToDisplay(videosToDisplay.sort((a, b) => b.views - a.views));
        }
        console.log(orderAsc);
    }
    const videoList = videosToDisplay.map(video => {
        console.log(video)
        return (
            <VideoSection key={video.id} videoDetails={video}/>
        )
    });

    return (
        <>
        <form className="form-section" onSubmit={handleSearchSubmit}>
        <FontAwesomeIcon icon={faFilter} className="filter-icon" onClick={handleFilterCLick}/>
        <input type="text" placeholder="Search" name="search" value={formData.search} onChange={handleSearchChange} />  {/* Search bar */}
        <button type="submit">Search</button> {/* Search button */}
        </form>
           

            {videoList}
        </>

    )


}

export default VideoGallery;