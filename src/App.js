import { Outlet, Link, Routes, Route } from "react-router-dom";

import Calculator from "./routes/Calculator";

function App() {
  return (
    <div className="app">
      {/* <Link to="/calculator">Calculator</Link> */}
      <Routes>
        <Route path="/">
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<h1>Ты забрёл не туда!</h1>} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
