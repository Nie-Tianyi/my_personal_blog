import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>


);
}

export default App;
