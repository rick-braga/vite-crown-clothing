import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
// import Mens from './pages/Shop/Mens';
// import Womens from './pages/Shop/Womens';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          {/* <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
