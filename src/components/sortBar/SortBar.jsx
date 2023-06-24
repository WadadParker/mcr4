import "./sortBar.css";

export const SortBar=()=>
{
    return (
        <div className="sortbar-container">
            <label htmlFor="sort">Sort By</label>
            <select>
                <option>Latest Post</option>
                <option>Most Upvoted</option>
            </select>
        </div>
    )
}