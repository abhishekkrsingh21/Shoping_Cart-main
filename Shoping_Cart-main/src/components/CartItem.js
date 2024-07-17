import React from "react";
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  console.log(item.title);

  return (
    <div>
      <div className="w-full flex gap-8 px-5 border-b-2 border-gray-800">
        <div className="h-[200px] w-[300px] my-8">
          <img src={item.image} alt="img" className="w-full h-full" />
        </div>

        <div className="w-full flex flex-col gap-5 mt-14">
          <div>
            <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</h1>
            <h1 className="text-gray-500 font-semibold text-[12px] text-left mt-3">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</h1>
          </div>
          <div className="flex w-full justify-between items-center  pr-3">
            <p className="text-green-600 font-bold "> ${item.price}</p>
            <div onClick={removeFromCart}  className="h-[30px] w-[30px] rounded-full bg-red-400 flex items-center justify-center"><FcDeleteDatabase /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
