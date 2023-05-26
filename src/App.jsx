import { Routes, Route } from "react-router-dom";

import HeaderFooter from "./component/HeaderFooter";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;
