import { Star, MapPin } from "lucide-react";
import { useState } from "react";

const FoodCard = ({ food, cart, setCart, coins, setCoins }) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(isSelected);

  const handleChooseButton = (food) => {
    // e.preventDefault();
    setIsSelected(true);

    setCart([...cart, food]);
    console.log(cart);
    // add coins
    const addCoins = coins - food.price;
    setCoins(addCoins);
    // console.log(addCoins);
  };
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={food.img}
          alt={food.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow">
          <Star size={15} className="text-yellow-500 fill-yellow-500" />
          {food.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{food.name}</h2>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
          <MapPin size={15} className="text-orange-500" />
          {food.restaurantName}
        </div>

        {/* Ingredients */}
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Ingredients:
          </p>

          <div className="flex flex-wrap gap-2">
            {food.ingredients.map((item, index) => (
              <span
                key={index}
                className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <p className="text-2xl font-bold text-orange-500">৳{food.price}</p>

          <button
            type="button"
            onClick={() => handleChooseButton(food)}
            disabled={isSelected ? true : false}
            className={`${isSelected ? "" : "bg-orange-500"} btn   text-white px-5 py-2 rounded-lg font-semibold `}
          >
            {isSelected ? "Selected" : "Choose Food"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
