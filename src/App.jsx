
import { Routes, Route } from "react-router-dom";

import Hearder from './component/Header'
import Home from './pages/Home';
// import Pricing from './Pricing';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Hearder />} >
        <Route index element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Route>
    </Routes>
  )
}

export default App
