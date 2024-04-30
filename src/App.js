import './App.css';
import Layout from './layout';
import AsosiySahifaPage from './pages/asosiy_sahifa';
import RouterComponent from './routes';
import {  Route, Router, Routes } from 'react-router-dom';
import FotogaleriyaComponent from "./components/fotogaleriya/index.jsx"
import VideogaleriyaComponent from "./components/videogaleriya/index.jsx"

function App() {
  
  return (
    <Layout>
      <RouterComponent>
        <AsosiySahifaPage/>
        <Routes>
          <Route path={"/"} element={<FotogaleriyaComponent/>}/>
          <Route path={"/videogalereya"} element={<VideogaleriyaComponent/>}/>
        </Routes>
      </RouterComponent>
    </Layout>
  );
}

export default App;
