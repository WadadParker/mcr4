import "./sideBar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons'

export const SideBar=()=>
{
    return (
        <div className="sidebar-container">
            <h1>MyForum</h1>
            <main className="icons-container">
            <FontAwesomeIcon className="icon" icon={faHouse} />
            <label>Home</label>
           
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            <label>Explore</label>

            <FontAwesomeIcon className="icon" icon={faBookmark} />
            <label>Bookmarks</label>

            <FontAwesomeIcon className="icon" icon={faUser} />
            <label>Profile</label>
            </main>
            <footer className="sidebar-footer">
            <img alt="" src="https://i.pinimg.com/originals/9d/d9/f1/9dd9f1b80bacbf44530ceb98ca2d8003.jpg" width={100} height={100} />
            <main>
            <strong>Wadad Parker</strong>
            <span>@wadadparker</span>
            </main>
            </footer>
        </div>
    )
}