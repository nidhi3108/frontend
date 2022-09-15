// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import AddPodcast from './component/AddPodcast';
import ListPodcast from './component/Listpodcast';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route element={<Login/>} path="login"/>
      <Route element={<Header/>} path="header"/>
      <Route element={<Register/>} path="register"/>
      <Route element={<AddPodcast/>} path="addpodcast"/>
      <Route element={<ListPodcast/>} path="listpodcast"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
