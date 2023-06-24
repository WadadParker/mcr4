import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";

import {Home} from "./pages/home/Home";
import { CommentPage } from './pages/commentPage/CommentPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/post/:postId" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
