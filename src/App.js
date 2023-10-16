import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RaspisaniePage from './pages/raspisanie';
import HomePage from './pages/Home';
import BarnaulPage from './pages/barnaul';
import TrainingPage from './pages/training';
import TrenerPage from './pages/trener';
import { HeaderPage } from './pages/header';
import { FooterPage } from './pages/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/barnaul'} element={<BarnaulPage/>}/>
          <Route path={'/raspisanie'} element={<RaspisaniePage/>}/>
          <Route path={'/training'} element={<TrainingPage/>}/>
          <Route path={'/trener'} element={<TrenerPage/>}/>
        </Routes>
      <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
