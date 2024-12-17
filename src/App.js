import './App.css';
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Portfolio from './components/Portfolio/Portfolio';
import { projects } from './data/portfolio/portfolio';


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='portfolio' element={<Portfolio content={projects}/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
