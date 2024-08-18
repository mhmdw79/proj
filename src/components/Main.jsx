
import React from "react";
import News from "./news/News";

const Main = () => {
  

  return (
    <div className="w-10/12">
      <div className="10/12 ">
        <ul className="flex justify-evenly text-gray-600 mt-10 font-YekanBakhMedium cursor-pointer">
          <li className="hover:text-blue-800">
            <a>اخبار سیاسی</a>
          </li>
          <li className="hover:text-blue-800">
            <a>اخبار ورزشی</a>
          </li>
          <li className="hover:text-blue-800">
            <a>اخبار اجتماعی</a>
          </li>
          <li className="hover:text-blue-800">
            <a>اخبار نظامی</a>
          </li>
          <li className="hover:text-blue-800">
            <a>اخبار فرهنگی</a>
          </li>
          <li className="hover:text-blue-800">
            <a>اخبار بین الملل</a>
          </li>
        </ul>
      </div>
     <News/>
    </div>
  );
};

export default Main;
