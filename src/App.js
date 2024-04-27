import './App.css';
import Layout from './layout';
import AsosiySahifaPage from './pages/asosiy_sahifa';
import RouterComponent from './routes';

function App() {
  return (
    <Layout>
      <RouterComponent>
        <AsosiySahifaPage />
      </RouterComponent>
    </Layout>
  );
}

export default App;

