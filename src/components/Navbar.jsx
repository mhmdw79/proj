import React from "react";
import HomeIcon from "../icons/Home.png"
import Clock from "../icons/Clock.png"
import Day from "../icons/24.png"
import Call from "../icons/Call.png"
import Favorite from "../icons/Favorite.png"
import Fire from "../icons/Fire.png"
import Form from "../icons/Form.png"
import News from "../icons/News.png"
import User from "../icons/User.png"
import Users from "../icons/Users.png"
import { Link } from "react-router-dom";
import Authors from "./Authors.js/Authors";

const Navbar = () => {
  return (
    <div className="w-2/12 h-screen  flex flex-col items-center p-6  border-r-2 ">
      <div>
        <h2 className="text-xs md:text-xl font-bold text-black font-iranyekanwebmedium">پروژه خبرگزاری </h2>
      </div>
      <div className="text-gray-400 text-xs md:text-sm mt-16 pb-4 border-b-2 font-iranyekanwebregular">
        <ul >
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={HomeIcon} width={20} height={20}  alt=""/>
            <Link to="/" className="pl-1">صفحه اصلی</Link>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Fire} width={20} height={20} alt=""/>
            <a className="pl-1">اخبار فوری</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Day} width={20} height={20} alt=""/>
            <a className="pl-1">اخبار روز</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={User} width={20} height={20} alt=""/>
            <a className="pl-1">دسته بندی</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center cursor-pointer">
          <image className="hidden sm:block" src={Call} width={20} height={20} alt=""/>
            <a className="pl-1">تماس با ما</a>
          </li>
          
        </ul>
      </div>
      <div className="text-gray-400 text-xs md:text-sm mt-16 pb-4 border-b-2 font-iranyekanwebregular">
      <ul >
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Clock} width={20} height={20} alt=""/>
            <a className="pl-1">تاریخچه</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Users} width={20} height={20} alt=""/>
            <a className="pl-1">انجمن ها</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Favorite} width={20} height={20} alt=""/>
            <a className="pl-1">علاقه مندی ها</a>
          </li>
          <li className="hover:text-blue-700 flex flex-row items-center mb-4 cursor-pointer">
          <image className="hidden sm:block" src={Form} width={20} height={20} alt=""/>
            <a className="pl-1">استخدام</a>
          </li>
          
          <li className="hover:text-blue-700 flex flex-row items-center cursor-pointer">
          <image className="hidden sm:block" src={News} width={20} height={20} alt=""/>
            <a className="pl-1"> خبرنگاران</a>
          </li>
        </ul>
      </div>
      <Authors/>
    </div>
  );
};

export default Navbar;
