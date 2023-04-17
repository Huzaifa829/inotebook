import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './components/contexApi/notes/NoteState';
import Pop_up from './components/Pop';

function App() {
  return (
    <>
    <NoteState>
         <BrowserRouter>
        <Navbar />
        <Pop_up message="this is amazing"/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
