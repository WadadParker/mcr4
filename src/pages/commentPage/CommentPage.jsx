import "./commentPage.css";

import {useContext} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import { SideBar } from "../../components/sidebar/SideBar";
import {SortBar} from "../../components/sortBar/SortBar";
import { Post } from "../../components/post/Post";
import { Comment } from "../../components/comment/Comment";

import {PostContext} from "../../context/PostContext";

export const CommentPage=()=>
{
    const navigate=useNavigate();
    const {postID}=useParams();
    const {state:{allPosts}}=useContext(PostContext);

    const foundPost=[...allPosts].find(({postId})=>postId==postID);

    return (
        <div className="home-container">
             <SideBar />
            <main className="comment-container">
                <header className="comment-header">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" onClick={()=>navigate("/")}/>
                    <h1>Post</h1>
                </header>
                <Post post={foundPost} />
                <hr/>
                {foundPost?.comments?.map(item=>(
                    <Comment comment={item} post={foundPost}/>
                ))}
            </main>
            <SortBar />
        </div>
    )
}