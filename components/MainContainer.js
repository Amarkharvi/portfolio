import React from "react";

const MainContainer = ({ children }) => {
    return (
        <div className=" bg-white shadow-lg my-10 w-3/4 ">
            {children}
        </div>
    );
};

export default MainContainer;