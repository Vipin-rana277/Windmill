import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import DashBoard from './Components/Dashboard/DashBoard';
import { loginPageData } from './utils/constant';
import Form from './Components/FormPage/Form';
import Card from './Components/CardPage/Card';
import Charts from './Components/ChartsPage/Charts';
import Button from './Components/ButtonPage/Button';
import Modal from './Components/ModalPage/Modal';
import Table from './Components/TablePage/Table';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage pageData={loginPageData} />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/form' element={<Form />} />
          <Route path='/card' element={<Card />} />
          <Route path='/chart' element={<Charts />} />
          <Route path='/button' element={<Button/>}/>
          <Route path='/modal' element={<Modal/>}/>
          <Route path='/table' element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
