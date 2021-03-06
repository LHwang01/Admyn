import HomePage from './pages/HomePage/HomePage'
//import NavBar from './pages/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignupPage/SignupPage'
import AddictionSelection from './pages/AddictionSelection/AddictionSelection'
import Journal from './pages/Journal/Journal'
import LearnMore from './pages/LearnMore/LearnMore'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        {/* note that we are using Routes instead  of switch  cuz  this is react-router-dom v6. 
      Swtich is deprecated. We are  also using element instead  of  component  this is becuase v6 uses this convension*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/goal' element={<AddictionSelection />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/learn-more' element={<LearnMore />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
