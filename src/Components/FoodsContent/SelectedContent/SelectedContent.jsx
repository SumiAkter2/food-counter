import SelectedFood from "./SelectedFood/SelectedFood";

const SelectedContent = ({ cart, setCart }) => {
  console.log(cart);
  const handleDeleteButton = (food) => {
    console.log("deleted", food);
  };
  return (
    <div>
      {cart.map((food) => (
        <SelectedFood food={food} handleDeleteButton={handleDeleteButton} />
      ))}
      <button
        // onClick={handleDeleteAll}
        className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Delete All
      </button>
    </div>
  );
};

export default SelectedContent;
