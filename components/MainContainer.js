import React from "react";

const MainContainer = ({ children }) => {
    return (
        <div className=" bg-white shadow-lg my-10 lg:w-3/4 w-96 ">
            {children}
        </div>
    );
};

export default MainContainer;