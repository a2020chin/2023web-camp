
import { Routes, Route } from "react-router-dom";

import HOME from './pages/Home';
// import Pricing from './Pricing';

function App() {


  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      {/* <Route path="/pricing" element={<Pricing />} /> */}
    </Routes>
  )
}

export default App
