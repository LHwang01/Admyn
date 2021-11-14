import HomePage from './pages/HomePage/HomePage'
//import NavBar from './pages/NavBar/NavBar'
import LoginPage from  './pages/LoginPage/loginPage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      {/* note that we are using Routes instead  of switch  cuz  this is react-router-dom v6. 
      Swtich is deprecated. We are also using element instead  of  component. this is becuase v6 uses element.*/}
      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
