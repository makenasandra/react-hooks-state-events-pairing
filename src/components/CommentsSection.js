import React, { useState } from "react";
import VotesButton from "./VotesButton";

function CommentsSection({ videoId, comments, commentUpVotes, setCommentDownVotes }) {
 
    let commentsList = comments.map(comm => {
        const { comment, user,id } = comm
        return (
            <div key={comm.id}>
                <h3>{user}</h3>
                <p>{comment}</p>
                <VotesButton videoId={videoId} commentId={id} commentUpVotes={commentUpVotes} setCommentDownVotes={setCommentDownVotes}/>
            </div>

        )
    })
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {commentsList}
        </div>


    )


}

export default CommentsSection;
