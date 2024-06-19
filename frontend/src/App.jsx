import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SelectionPage from './pages/SelectionPage';
import RegisterBusiness from './pages/RegisterBusiness';
import RegisterRetail from './pages/RegisterRetail';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/selection-type' element={<SelectionPage/>}/>
          <Route path='/register-business' element={<RegisterBusiness/>}/>
          <Route path='/register-retail' element={<RegisterRetail/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
