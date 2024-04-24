import React, { useState } from "react";
import VotesButton from "./VotesButton";

function CommentsSection({ videoId, comments, commentUpVotes, setCommentDownVotes, removeComment }) {
 
    let commentsList = comments.map(comm => {
        const { comment, user,id } = comm
        return (
            <div key={comm.id}>
                <h3>{user}</h3>
                <p>{comment}</p>
                <VotesButton videoId={videoId} commentId={id} commentUpVotes={commentUpVotes} setCommentDownVotes={setCommentDownVotes}/>
                <button className="hide-comments" onClick={()=> removeComment(comm.id)}>Remove Comment</button>
            </div>

        )
    })
    return (
        <div className="comments-section">
            <h2>{comments.length} Comments</h2>
            {commentsList}
        </div>


    )


}

export default CommentsSection;
