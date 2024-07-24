import React from 'react';

const GridItem = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default GridItem;
