import "./home.css";
import {useContext} from "react";

import { SideBar } from "../../components/sidebar/SideBar";
import {SortBar} from "../../components/sortBar/SortBar";
import { Post } from "../../components/post/Post";

import {PostContext} from "../../context/PostContext";

export const Home=()=>
{
    const {state:{allPosts}, sortPosts}=useContext(PostContext);
    return (
        <div className="home-container">
            <SideBar />
            <main>
            <h1>Latest Posts</h1>
            <ul>
                {sortPosts().map(item=>
                    (
                        <li className="list-item-container">
                            <Post post={item}/>
                        </li>
                    ))}
            </ul>
            </main>
            <SortBar />
        </div>
    )
}