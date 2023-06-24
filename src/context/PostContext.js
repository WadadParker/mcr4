import { createContext,useReducer } from "react";

import {postDb} from "../db/postsDb";

export const PostContext=createContext();

export const PostProvider=({children})=>
{
    const PostReducer=(posts,{type,payload})=>
    {
        switch(type)
        {
            case "":
                return {...posts};
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