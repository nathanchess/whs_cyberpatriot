import './App.scss'
import { Route, Routes} from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';

import Home from './Pages/Home/Home'
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
