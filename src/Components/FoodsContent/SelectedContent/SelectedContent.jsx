import SelectedFood from "./SelectedFood/SelectedFood";

const SelectedContent = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div>
      <h1 className="text-3xl my-12">Selected Food is here Now</h1>
      <SelectedFood cart={cart} setCart={setCart} />
    </div>
  );
};

export default SelectedContent;
