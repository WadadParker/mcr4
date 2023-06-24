import "./sortBar.css";
import {useContext} from "react";

import {PostContext} from "../../context/PostContext";

export const SortBar=()=>
{
    const {dispatch,state:{sortByDate}}=useContext(PostContext);
   
    return (
        <div className="sortbar-container">
            <label htmlFor="sort">Sort By</label>
            <select onChange={()=>dispatch({type:"TOGGLE_SORT",payload:!sortByDate})}>
                <option >Latest Post</option>
                <option >Most Upvoted</option>
            </select>
        </div>
    )
}