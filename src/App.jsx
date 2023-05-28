import { Routes, Route } from "react-router-dom";

import HeaderFooter from "./component/HeaderFooter";
// import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Loading from "./component/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Loading />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;
