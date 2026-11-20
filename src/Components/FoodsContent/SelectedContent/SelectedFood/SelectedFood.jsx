import { Trash2 } from "lucide-react";
const SelectedFood = ({ cart, setCart }) => {
  return (
    <div>
      {}
      <div>
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200"
                alt="Pizza"
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Italian Pizza
                </h3>

                <p className="text-sm text-gray-500 mt-1">Pizza Palace</p>

                <p className="text-lg font-bold text-orange-500 mt-2">৳450</p>
              </div>
            </div>

            <button className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-3 rounded-xl transition">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <button
          // onClick={handleDeleteAll}
          className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Delete All
        </button>
      </div>

      <p className="text-center text-gray-400 py-8">No selected food items!</p>
    </div>
  );
};

export default SelectedFood;
