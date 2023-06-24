import "./post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faComment, faShareNodes,faBookmark } from '@fortawesome/free-solid-svg-icons'


export const Post=({post})=>
{
    return (
        <div className="individual-post-container">
        
            <div className="vote-container">
            <FontAwesomeIcon icon={faArrowUp} className="vote-item upvote"/>
            <span className="vote-item">{post?.upvotes - post?.downvotes}</span>
            <FontAwesomeIcon icon={faArrowDown} className="vote-item downvote"/>
            </div>

            <header className="post-profile-header">
                <img src={post?.picUrl} alt="" width={100} height={100} />
                <small className="username-container">Posted By <span className="username">@{post?.username}</span></small>
            </header>
            <h1>{post?.post}</h1>
            <main>
            {post?.tags.map(item=>(
                <span className="tag">{item}</span>
            ))}
            </main>

                <p>{post?.postDescription}</p>

            <footer className="post-footer">
                <div className="like-comment-share">
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faShareNodes} />
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </footer>
        </div>
    )
}