import { Trash2 } from "lucide-react";

const SelectedFood = ({ food, handleDeleteButton }) => {
  console.log("selectedFood");

  return (
    <div>
      {food.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          No selected food items!
        </p>
      ) : (
        <div>
          <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={food.img}
                  alt="Pizza"
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {food.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">Pizza Palace</p>

                  <p className="text-lg font-bold text-orange-500 mt-2">
                    ৳{food.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDeleteButton(food)}
                className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-3 rounded-xl transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedFood;
