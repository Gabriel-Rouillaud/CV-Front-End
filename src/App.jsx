import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import WorkInProgress from './pages/WorkInProgress/WorkInProgress';
import NothingHere from './pages/NothingHere/nothinghere';
//import Experiences from './pages/Experiences/experiences';
//import Projects from './pages/Projects/projects';
//import Skills from './pages/Skills/skills';
//import Trainings from './pages/Trainings/trainings';


export default function App() {
  return (
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route index element={<Home/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="experiences" element={<WorkInProgress/>} />
        <Route path="projects" element={<WorkInProgress/>} />
        <Route path="skills" element={<WorkInProgress/>} />
        <Route path="trainings" element={<WorkInProgress/>} />
        <Route path="*" element={<NothingHere/>} />
    </Routes>
  );
};


