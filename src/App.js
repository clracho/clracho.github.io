
import './App.css';

import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/Home';
import PhotographyPage from './pages/Photography';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import GamePage from './pages/Games';
import NameCitiesPage from './pages/NameCities';
import GorglePage from './pages/Gorgle';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div class="flex-wrapper">
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/photography' element={<PhotographyPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/games' element={<GamePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/namecities' element={<NameCitiesPage/>}/>
      <Route path='/gorgle' element={<GorglePage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}


export default App;
