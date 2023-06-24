import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";

import {Home} from "./pages/home/Home";
import { CommentPage } from './pages/commentPage/CommentPage';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <h1 className='nav-header' >MyForum</h1>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/post/:postID" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
