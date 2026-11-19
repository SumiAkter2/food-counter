import { use } from "react";
import FoodCard from "../FoodCard/FoodCard";

const FoodsContent = ({ foodPromise }) => {
  const data = use(foodPromise);
  console.log(data);
  return (
    <div className="grid grid-cols-3 mx-12 gap-12">
      {data.map((food) => (
        <FoodCard food={food} key={food.id}></FoodCard>
      ))}
    </div>
  );
};

export default FoodsContent;
