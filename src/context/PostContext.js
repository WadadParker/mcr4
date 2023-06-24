import { createContext,useReducer } from "react";

import {postDb} from "../db/postsDb";

export const PostContext=createContext();

export const PostProvider=({children})=>
{
    const PostReducer=(posts,{type,payload})=>
    {
        const {allPosts}=posts;
        switch(type)
        {
            case "UPVOTE":
                const updateUpvote=allPosts.map(item=>{
                    if(item.postId==payload)
                    {
                        return {...item,upvotes:item.upvotes + 1,upvote:true,downvote:false};
                    }
                    return item;
                })
                return {...posts, allPosts:updateUpvote,};
              
            case "DOWNVOTE":
                const updateDownvote=allPosts.map(item=>{
                    if(item.postId==payload)
                    {
                        return {...item,downvotes:item.downvotes + 1,upvote:false,downvote:true};
                    }
                    return item;
                })
                return {...posts, allPosts:updateDownvote,};
             
            case "BOOKMARK":

     
            default:
                return posts;    
        }
    }

    const initialState= {
        allPosts:postDb.posts,
    }

    const [state,dispatch]=useReducer(PostReducer,initialState);

    return (
        <PostContext.Provider value={{state,dispatch}}>
            {children}
        </PostContext.Provider>
    )
}