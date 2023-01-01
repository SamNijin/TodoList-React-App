import React from "react";
import icon from "../image/task-list.png";

function Header() {
    return (
        <div className="bg-purple-900 h-6 sm:h-10 lg:h-16 flex justify-center gap-1 sm:gap-3 lg:gap-4 pt-1 lg:pt-3 transition-all duration-200">
            <img src={icon} className="h-4 sm:h-8 lg:h-10" alt="todoList" />
            <h2 className="text-purple-200 text-xs sm:text-base lg:text-2xl sm:font-bold lg:font-extrabold sm:pt-1">
                ToDo List
            </h2>
        </div>
    );
}

export default Header;
