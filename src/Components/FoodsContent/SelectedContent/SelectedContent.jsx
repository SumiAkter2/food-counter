import SelectedFood from "./SelectedFood/SelectedFood";

const SelectedContent = ({ cart, setCart, coins, setCoins }) => {
  console.log(cart);
  const handleDeleteButton = (food) => {
    const filterFood = cart.filter(
      (filteredFood) => filteredFood.name != food.name,
    );
    const restCoins = coins + food.price;
    setCoins(restCoins);
    setCart(filterFood);
    // console.log("deleted", food, "filter:", filterFood);
  };
  return (
    <div>
      {cart.map((food) => (
        <SelectedFood food={food} handleDeleteButton={handleDeleteButton} />
      ))}
      <button
        onClick={() => setCart([])}
        className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Delete All
      </button>
    </div>
  );
};

export default SelectedContent;
