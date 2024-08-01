import React, { memo } from "react";

const UnitConv = ({ dan23, dan21 }) => {
    console.log('와우 단위변경');
    return (
        <div>
            
            <p>현재 cm: {dan21}</p>
            <p>현재 m: {dan23}</p>
        </div>
    );
};

export default memo(UnitConv);
