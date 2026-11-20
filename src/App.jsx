import { Suspense } from "react";
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
  const foodPromise = fetchFood();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<p></p>}>
        <FoodsContent foodPromise={foodPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
