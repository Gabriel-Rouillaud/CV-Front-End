import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
//import WorkInProgress from './pages/WorkInProgress/WorkInProgress';
import NothingHere from './pages/NothingHere/nothinghere';
import Experiences from './pages/Experiences/experiences';
import Projects from './pages/Projects/projects';
import Skills from './pages/Skills/skills';
import Trainings from './pages/Trainings/trainings';


export default function App() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="experiences" element={<Experiences/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="trainings" element={<Trainings/>}/>
        <Route path="*" element={<NothingHere/>}/>
    </Routes>
  );
};


