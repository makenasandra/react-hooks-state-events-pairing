import React, { useState } from "react";

function VideoSection({ videoDetails }) {
    const { title, embedUrl } = videoDetails;
    return (
    <div>
        <iframe
            width="919"
            height="525"
            src={embedUrl}
            allowFullScreen
            title={title}
        />
        <h2>{title}</h2>
    </div>


    )


}

export default VideoSection;
