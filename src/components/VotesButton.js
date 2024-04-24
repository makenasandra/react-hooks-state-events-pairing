import React, { useState } from "react";

function CommentsSection({videoId, commentId, commentUpVotes, setCommentDownVotes}) {
    const [upVotes, setUpvotes] = useState(0);
    const [downVotes, setDownvotes] = useState(0);
    const id = `${commentId}${videoId}`;
    const storedUpVotes = JSON.parse(localStorage.getItem(id))["upVotes"];
    const storedDownVotes = JSON.parse(localStorage.getItem(id))["downVotes"];

    function handleUpVoteClick() {
        if (upVotes === 0) {
            setUpvotes(upVotes + 1);
            setDownvotes(0);
            localStorage.setItem(`${id}`, JSON.stringify({upVotes: upVotes+1,downVotes:0}))
        }
      
        // console.log(JSON.parse(localStorage.getItem(id))["upVotes"]);

    }
    function handleDownVotesClick() {
        if(downVotes===0){
        setDownvotes(downVotes + 1);
        setUpvotes(0);
        localStorage.setItem(`${id}`, JSON.stringify({upVotes: 0,downVotes: downVotes+1}))
        }
    }

    return (
        <div>
            <button className="votes" onClick={handleUpVoteClick}>{storedUpVotes}{"\uD83D\uDC4D"}</button> <button className="votes" onClick={handleDownVotesClick}>{storedDownVotes}{"\uD83D\uDC4E"}</button>
        </div>


    )


}

export default CommentsSection;
