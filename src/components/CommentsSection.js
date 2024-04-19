import React, { useState } from "react";

function CommentsSection({ comments }) {

    let commentsList = comments.map(comm => {
        const { comment, user } = comm
        return (
            <div>
                <h3>{user}</h3>
                <p>{comment}</p>
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
