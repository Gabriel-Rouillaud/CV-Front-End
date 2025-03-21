import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
// import Menu from './pages/Menu/menu';
//import WorkInProgress from './pages/WorkInProgress/WorkInProgress';
import Error404 from "./pages/404/404";
/* import Experiences from './pages/Experiences/experiences';
import Projects from './pages/Projects/projects';
import Skills from './pages/Skills/skills';
import Trainings from './pages/Trainings/trainings'; */


export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="menu" element={<Menu/>}/> */}
        {/* <Route path="experiences" element={<Experiences/>}/> */}
        {/* <Route path="projects" element={<Projects/>}/> */}
        {/* <Route path="skills" element={<Skills/>}/> */}
        {/* <Route path="trainings" element={<Trainings/>}/> */}
        <Route path="*" element={<Error404/>}/>
    </Routes>
  );
};


