import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="w-screen h-screen">
      {
        cart?.length > 0 ? (
          <div className="flex mx-auto gap-14  max-w-6xl">

            <div className="w-full">
              {
                cart.map((item, index) => { return (<CartItem key={item.id} item={item} itemIndex={index} />) })
              }
            </div>

            <div className="w-[40rem]  flex flex-col justify-between my-10 gap-10">

              <div>
                <div className="font-bold uppercase text-green-700">Your Cart</div>
                <div className="font-bold text-4xl uppercase text-green-700">Summary</div>
                <p className="mt-5">
                  <span className="font-bold text-gray-600">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="h-full">
                <p className="font-bold text-gray-600">Total Amount: <span className="font-extrabold text-xl text-black"> ${totalAmount}</span></p>
                <button className="w-full py-4 mt-5 font-extrabold text-xl rounded-lg border border- border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition duration-300 ease-in">
                  Checkout Now
                </button>
              </div>

            </div>
          </div>
        ) : (
          <div className="flex flex-col h-screen justify-center items-center ">
            <h1 className="font-extrabold text-2xl"> Your Card is Empty</h1>
            <Link to="/Shoping_Cart">
              <button className="px-[60px] py-4 mt-5 font-bold rounded-md border border- border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition duration-300 ease-in uppercase">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
