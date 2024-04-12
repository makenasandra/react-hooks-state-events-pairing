import React, { useState } from "react";
import videos from "../data/videos-db.js";
import VideoSection from "./VideoSection.js";

function VideoGallery() {
    const videoList = videos.map(video => {
        // console.log(video)
        return (
            <VideoSection key={video.id} videoDetails={video} />
        )
    })
    return (
        <>
            {videoList}
        </>

    )


}

export default VideoGallery;