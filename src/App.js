import './App.css';
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Portfolio from './components/Portfolio/Portfolio';
import Publications from '../src/components/Publications/Publications';
import MobileNav from './components/MobileNav/MobileNav';
import { portfolioLabel, projects } from './data/portfolio/portfolio';
import { publicationsLabel, publications } from './data/publications/publications';


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='portfolio' element={<Portfolio label={portfolioLabel} content={projects}/>}/>
    <Route path='publications' element={<Publications label={publicationsLabel} content={publications}/>}/>
    <Route path='mobileNav' element={<MobileNav/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
