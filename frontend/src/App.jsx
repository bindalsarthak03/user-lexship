import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Spinner from './components/Spinner';
const SelectionPage = lazy(() => import('./pages/SelectionPage'));
const RegisterBusiness = lazy(() => import('./pages/RegisterBusiness'));
const RegisterRetail = lazy(() => import('./pages/RegisterRetail'));

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/selection-type' element={<SelectionPage />} />
            <Route path='/register-business' element={<RegisterBusiness />} />
            <Route path='/register-retail' element={<RegisterRetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  )
}

export default App
