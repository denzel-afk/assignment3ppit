import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Completed from './Completed';
import Title from './Title'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Update from './Update'

// File name convention-nya: .jsx buat React component, .js buat yg bkn component
// Button yang bukan buat submit form sebaiknya pake atribut type="button": https://arc.net/l/quote/jxzncice

function App() {
  return (
    <Router>
      <div className="w-screen">
        {/* Sebaiknya yg w-screen elemen paling atas aja, biar app-nya gk ada scroll2 ke samping horizontal */}
        <Title className="w-screen"/>
        <div className="flex">
          <Navbar classname="w-screen"/>
              <div className="p-4 w-screen">
                <Routes>
                  <Route exact path='/' element={ <Home />}></Route>
                  <Route path="/create" element={<Create />}></Route>
                  <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
                  <Route path="/completed" element={<Completed />}></Route>
                  <Route path="/update/:id" element={<Update />}></Route>
                  <Route path ="*" element={<NotFound />}></Route>
                </Routes>
              </div>
            </div>
      </div>
    </Router>
  );
}

export default App;
