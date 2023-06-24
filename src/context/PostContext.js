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
                const updateBookmark=allPosts.map(item=>{
                    if(item.postId==payload)
                    {
                        return {...item,isBookmarked:!item.isBookmarked};
                    }
                    return item;
                })
                return {...posts, allPosts:updateBookmark,};
              
            case "SORT":
                return {...posts,allPosts:payload};   
            
            case "TOGGLE_SORT":
                return {...posts,sortByDate:payload};
     
            default:
                return posts;    
        }
    }

    const initialState= {
        allPosts:postDb.posts,
        sortByDate:true,
    }

    const [state,dispatch]=useReducer(PostReducer,initialState);

    const sortPosts=()=>
    {
        const {allPosts,sortByDate}=state;
        if(sortByDate)
        {
            
            const sortedPosts = [...allPosts].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
                
        return sortedPosts;

        }
        else {
            const sortedPosts=[...allPosts].sort((a,b)=>b.upvotes - a.upvotes);
            return sortedPosts;
        }
    }

    return (
        <PostContext.Provider value={{state,dispatch, sortPosts}}>
            {children}
        </PostContext.Provider>
    )
}