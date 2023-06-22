import React from "react";
import moment from "moment";
import './Comment.css';

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="comment-metadata">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;