import { Outlet, Link, Routes, Route } from "react-router-dom";

import Calculator from "./routes/Calculator";
import Homepage from "./routes/Homepage";

function App() {
  return (
    <div className="app">
      {/* <Link to="/calculator">Calculator</Link> */}
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<h1>Ты забрёл не туда!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
