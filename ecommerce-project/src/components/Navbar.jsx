import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";

function Navbar() {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [isLogin, setIsLogin] = useState(true)

   const openSignUp = () => {
    setIsLogin(false)
    setIsModalOpen(true)
   }

   const openLogin = () => {
    setIsLogin(true)
    setIsModalOpen(true)
   }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form>
            <input type="text" placeholder="Search Product" 
            className="w-full border py-2 px-4"/>
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <button className="hidden md:block" 
          onClick={() => setIsModalOpen(true)}>
            Login | Register
            </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
      </Modal>
    </nav>
  );
}

export default Navbar;
