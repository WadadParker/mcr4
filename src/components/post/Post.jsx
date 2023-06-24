import "./post.css";
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faComment, faShareNodes,faBookmark } from '@fortawesome/free-solid-svg-icons'

import { PostContext } from "../../context/PostContext";

export const Post=({post})=>
{
    const {state,dispatch}=useContext(PostContext);
    // const {upvote,downvote}=state;
    
    return (
        <div className="individual-post-container">
        
            <div className="vote-container">
            <FontAwesomeIcon style={post?.upvote?{color:"green"}:{color:""}} icon={faArrowUp} className="vote-item upvote" onClick={()=>dispatch({type:"UPVOTE",payload:post?.postId})}/>
            <span className="vote-item">{(post?.upvotes )- (post?.downvotes)}</span>
            <FontAwesomeIcon style={post?.downvote?{color:"red"}:{color:""}} icon={faArrowDown} className="vote-item downvote" onClick={()=>dispatch({type:"DOWNVOTE",payload:post?.postId})}/>
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
                    <FontAwesomeIcon icon={faBookmark} style={post?.isBookmarked?{color:"#ef14ef"}:{color:""}} onClick={()=>dispatch({type:"BOOKMARK",payload:post?.postId})}/>
                </div>
            </footer>
        </div>
    )
}