import "./home.css";
import {useContext} from "react";

import { SideBar } from "../../components/sidebar/SideBar";
import {SortBar} from "../../components/sortBar/SortBar";
import { Post } from "../../components/post/Post";

import {PostContext} from "../../context/PostContext";

export const Home=()=>
{
    const {state:{allPosts}}=useContext(PostContext);
    return (
        <div className="home-container">
            <SideBar />
            <main>
            <h1>Latest Posts</h1>
            <ul>
                {allPosts.map(item=>
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