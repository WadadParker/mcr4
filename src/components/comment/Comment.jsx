import "./comment.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faComment, faShareNodes } from '@fortawesome/free-solid-svg-icons'

export const Comment=({comment,post})=>
{
    return (
        <div className="individual-comment-container">
            <img className="comment-pfp" alt="" src={comment?.picUrl} width={75} height={75} />
            <main>
                <p><b>{comment?.name}</b> @{comment?.username} <b>.</b> 1m</p>
                
            </main>
            <small className="small-comment">Replying to <span>@{post?.username}</span></small>
                <p className="comment-content">{comment?.comment}</p>
            <footer className="post-footer comment-footer">
                <div className="like-comment-share">

                     <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment}/>
                    
                    <FontAwesomeIcon icon={faShareNodes} />
    
                </div>
            </footer>
        </div>
    )
}