import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companise from './compnents/Companies';
import Home from './pages/Home';
import Error from './pages/Home';
import Navbar from './compnents/layout/Navbar';
import SingleCompany from './compnents/singleCompany';

const App =()=> {
  return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/companies' element={<Companise/>}/>
   <Route path='/companies/:id' element={<SingleCompany/>}/> 
   <Route path='*' element={<Error/>}/>
   </Routes>
  </BrowserRouter>
  );
};

export default App;