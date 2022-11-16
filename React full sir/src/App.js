import logo from './logo.svg';

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home  name="Alex"/>} />
         </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
