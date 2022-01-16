import Header from './components/Header';

import './Global.css';
import MainRoutes from './Routes';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <MainRoutes />
    </div>
  );
}

export default App;
