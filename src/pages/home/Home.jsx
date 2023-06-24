import "./home.css";

import { SideBar } from "../../components/sidebar/SideBar";
import {SortBar} from "../../components/sortBar/SortBar";

export const Home=()=>
{
    return (
        <div>
            
            <SideBar />
            <h1>Latest Posts</h1>
            <SortBar />
        </div>
    )
}