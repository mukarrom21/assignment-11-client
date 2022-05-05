import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home/Home';
import Signin from './Pages/Login/Signin/Signin';
import Signup from './Pages/Login/Signup/Signup';

function App() {
  return (
    <div className="">
      <Header></Header>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
