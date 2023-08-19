
import Signin from './pages/Signin';
// import FinalHome from './pages/finalHome';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';

function App() {

  const FinalHome = () => {
    return (
      <main className="app transition-all ease-in">
          <Home />
        <Canvas />
        <Customizer />
      </main>
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Signin />} />
          <Route path="/home" exact element={<Catalogue />} />
          <Route path='/customize' exact element={<FinalHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
