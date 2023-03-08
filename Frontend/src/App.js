import logo from './logo.svg';
import './App.css';
import FormPropsTextFields from './form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ViewUser from './Viewuser';
import EditUser from './EditUser';


function App() {
  return (
  
    <>
    {/* <FormPropsTextFields/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormPropsTextFields/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/view' element={<ViewUser/>}></Route>
        <Route path='/edituser' element={<EditUser/>}></Route>
      </Routes> 
    </BrowserRouter>
   </>
   
   
  );
}

export default App;
