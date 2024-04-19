import React, { useState } from "react";
import CommentsSection from "./CommentsSection";


function VideoSection({ videoDetails }) {
    const { title, embedUrl, views, createdAt, upvotes, downvotes, comments} = videoDetails;
    const [upVotes, setUpvotes] = useState(upvotes);
    const [downVotes, setDownvotes] = useState(downvotes);
    const [showComments, setShowComments] = useState(true);

    function handleUpVoteClick(){
        setUpvotes(upvotes+1);
        setDownvotes(downvotes);
    }
    function handleDownVotesClick(){
        setDownvotes(downvotes+1);
        setUpvotes(upvotes);
    }
    function handleCommentsButton(){
        setShowComments(!showComments);
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
        <button className="votes" onClick={handleUpVoteClick}>{upVotes}{"\uD83D\uDC4D"}</button> <button className="votes" onClick={handleDownVotesClick}>{downVotes}{"\uD83D\uDC4E"}</button>
        <div>
        <button className="hide-comments" onClick={handleCommentsButton}>{showComments? "Hide Comments": "Show Comments"}</button>
        </div>
        <hr className="page-divider" /> {/* Divider */}
        {showComments? <CommentsSection comments={comments}/>: <></>}
    </div>


    )


}

export default VideoSection;
