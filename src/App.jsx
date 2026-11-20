import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import FoodsContent from "./Components/FoodsContent/FoodsContent";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const fetchFood = async () => {
  const res = await fetch("/food.json");

  return res.json();
};

function App() {
  const [cart, setCart] = useState([]);
  const [coins, setCoins] = useState(5000);

  const foodPromise = fetchFood();
  return (
    <>
      <Navbar coins={coins} />
      <Banner />
      <Suspense fallback={<p></p>}>
        <FoodsContent
          foodPromise={foodPromise}
          cart={cart}
          setCart={setCart}
          coins={coins}
          setCoins={setCoins}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
