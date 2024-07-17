import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
        <p>{post.title.slice(0, 15) + "..."}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={post.image} alt="img" className="w-full h-full" />
      </div>

      <div className="flex w-full justify-between items-center mt-5">
        <div>
          <p className="text-green-600 font-semibold ">${post.price}</p>
        </div>

        {
          cart?.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in">Remove Items</button>) : (
          <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in">Add to Cart</button>)
        }
      </div>

    </div>
  )
};

export default Product;
