import React from "react";

const MainContainer = ({ children }) => {
    return (
        <div className=" bg-white shadow-lg xl:my-10 lg:my-10 md:my-10 2xl:my-10   md:w-2/3 sm:w-100  lg:w-3/4 w-100 ">
            {children}
        </div>
    );
};

export default MainContainer;