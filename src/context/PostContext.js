import { createContext } from "react";

export const PostContext=createContext();

export const PostProvider=({children})=>
{
    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}