import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CarsPage from "./components/OurCars";
import LoginPage from "./components/RegistrationForm";
import CartPage from "./components/Cart";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="/products" element={<CarsPage />} />
        <Route path="/login" element={<CartPage />} />
        <Route path="/registration" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
