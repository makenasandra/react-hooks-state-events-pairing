import React, { useState } from "react";
import '../App.css';

function VideoSection({ videoDetails }) {
    const { title, embedUrl, views, createdAt, upvotes, downvotes} = videoDetails;
    const [upVotes, setUpvotes] = useState(upvotes);
    const [downVotes, setDownvotes] = useState(downvotes);

    function handleUpVoteClick(){
        setUpvotes(upvotes+1);
        setDownvotes(downvotes);
    }
    function handleDownVotesClick(){
        setDownvotes(downvotes+1);
        setUpvotes(upvotes);
    }
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
        <p>{views} views | Uploaded {createdAt}</p>
        <button onClick={handleUpVoteClick}>{upVotes}{"\uD83D\uDC4D"}</button> <button onClick={handleDownVotesClick}>{downVotes}{"\uD83D\uDC4E"}</button>
        <div>
        <button>Hide Comments</button>
        </div>
    </div>


    )


}

export default VideoSection;
