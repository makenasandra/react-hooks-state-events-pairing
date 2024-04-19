import React, { useState } from "react";
import videos from "../data/videos-db.js";
import VideoSection from "./VideoSection.js";

function VideoGallery() {
    const [formData, setFormData] = useState({search:""});
    const [videosToDisplay, setVideosToDisplay] = useState(videos);

    const videoList = videosToDisplay.map(video => {
        // console.log(video)
        return (
            <VideoSection key={video.id} videoDetails={video} />
        )
    });

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

    return (
        <>
        <form className="form-section" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" name="search" value={formData.search} onChange={handleSearchChange} />  {/* Search bar */}
        <button type="submit">Search</button> {/* Search button */}
        </form>
           

            {videoList}
        </>

    )


}

export default VideoGallery;