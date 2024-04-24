import React, { useState } from "react";
import CommentsSection from "./CommentsSection";


function VideoSection({ videoDetails }) {
    const { id, title, embedUrl, views, createdAt, upvotes, downvotes, comments} = videoDetails;
    const [upVotes, setUpvotes] = useState(upvotes);
    const [downVotes, setDownvotes] = useState(downvotes);
    const [showComments, setShowComments] = useState(true);
    const [commentUpVotes, setCommentDownVotes] = useState(0);
    const [commentsToDisplay, setCommentsToDisplay] = useState(comments);

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
    function removeComment(id){
        console.log({id})
    setCommentsToDisplay(commentsToDisplay.filter(comment=>!(comment.id===id)));
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
        {showComments? <CommentsSection videoId={id} comments={commentsToDisplay} commentUpVotes={commentUpVotes} setCommentDownVotes={setCommentDownVotes} removeComment={removeComment}/>: <></>}
    </div>


    )


}

export default VideoSection;
