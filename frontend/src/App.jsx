import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Spinner from './components/Spinner';
import KycBusiness from './pages/KycBusiness';
const SelectionPage = lazy(() => import('./pages/SelectionPage'));
const RegisterBusiness = lazy(() => import('./pages/RegisterBusiness'));
const RegisterRetail = lazy(() => import('./pages/RegisterRetail'));

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="*"
              element={<Navigate to="/selection-type" replace={true} />}
            />
            <Route path='/selection-type' element={<SelectionPage />} />
            <Route path='/register-business' element={<RegisterBusiness />} />
            <Route path='/register-retail' element={<RegisterRetail />} />
            <Route path='/kyc-verification' element={<KycBusiness/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  )
}

export default App
