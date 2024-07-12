import React from 'react';

const GridContainer = ({ children }) => {
    return (
        <div className="container mx-auto px-4 grid gap-8 max-w-7xl">
            {children}
        </div>
    );
};

export default GridContainer;
