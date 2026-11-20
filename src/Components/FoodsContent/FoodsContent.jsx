import { use, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import SelectedContent from "./SelectedContent/SelectedContent";

const FoodsContent = ({ foodPromise, cart, setCart, coins, setCoins }) => {
  const [selected, setSelected] = useState("available");

  const data = use(foodPromise);
  // console.log(data);
  // console.log(selected);
  // console.log(cart);

  return (
    <div className="mx-12 ">
      <div className="flex justify-between items-center">
        {selected === "available" ? (
          <h1 className="text-3xl my-12">Available Food</h1>
        ) : (
          <h1 className="text-3xl my-12">Selected Food: {cart.length}/8</h1>
        )}

        <div>
          <div className="flex items-center ">
            <button
              onClick={() => setSelected("available")}
              className={`${selected === "available" ? " bg-orange-500" : " bg-gray-200"}  btn   text-black px-5 py-2 rounded-r-0 rounded-l-xl font-semibold`}
            >
              Available
            </button>

            <button
              onClick={() => setSelected("selected")}
              className={`${selected === "selected" ? " bg-orange-500" : " bg-gray-200"}  btn  text-black rounded-l-0 px-5 py-2 rounded-r-xl font-semibold`}
            >
              Selected ({cart.length})
            </button>
          </div>
        </div>
      </div>
      {selected === "available" ? (
        <div className="grid grid-cols-3 gap-12">
          {data.map((food) => (
            <FoodCard
              food={food}
              key={food.id}
              cart={cart}
              setCart={setCart}
              coins={coins}
              setCoins={setCoins}
            ></FoodCard>
          ))}
        </div>
      ) : (
        <SelectedContent
          cart={cart}
          setCart={setCart}
          coins={coins}
          setCoins={setCoins}
        ></SelectedContent>
      )}
    </div>
  );
};

export default FoodsContent;
