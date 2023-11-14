import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Customer from "./components/Customer";
import Inventory from "./components/Inventory";
import SalesReport from "./components/SalesReport";



export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route  >
            <Route path="/" exact element={<Overview />} />

            <Route path="/customer" exact element={<Customer />} />
            <Route path="/inventory" exact element={<Inventory />} />
            <Route path="/salesreport" exact element={<SalesReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);