import { use, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import SelectedContent from "./SelectedContent/SelectedContent";

const FoodsContent = ({ foodPromise }) => {
  const [selected, setSelected] = useState("available");

  const data = use(foodPromise);
  console.log(data);
  console.log(selected);

  return (
    <div className="mx-12 ">
      <div className="flex justify-between items-center">
        {selected === "available" ? (
          <h1 className="text-3xl my-12">Available Food</h1>
        ) : (
          <h1 className="text-3xl my-12">Selected Food: 0/8</h1>
        )}

        <div>
          <div className="flex items-center ">
            <button
              onClick={() => setSelected("available")}
              className={`${selected === "available" ? " bg-orange-500" : " bg-gray-200"}  btn   text-black px-5 py-2 rounded-r-0 rounded-l-lg font-semibold`}
            >
              Available
            </button>

            <button
              onClick={() => setSelected("selected")}
              className={`${selected === "selected" ? " bg-orange-500" : " bg-gray-200"}  btn  text-black rounded-l-0 px-5 py-2 rounded-l-lg font-semibold`}
            >
              Selected (0)
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
             
            ></FoodCard>
          ))}
        </div>
      ) : (
        <SelectedContent></SelectedContent>
      )}
    </div>
  );
};

export default FoodsContent;
