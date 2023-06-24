import "./sortBar.css";

export const SortBar=()=>
{
    return (
        <div>
            <label htmlFor="sort">Sort By</label>
            <select>
                <option>Latest Post</option>
                <option>Most Upvoted</option>
            </select>
        </div>
    )
}