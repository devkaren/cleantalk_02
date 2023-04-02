import React, { useState } from 'react';

const IconPopover = ({ children, content, classes, onClick }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onClick={onClick}
            className={`${classes} relative inline-block`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}

            {showTooltip && (
                <div className={`${showTooltip ? 'fade-in' : 'fade-out'} absolute z-50 px-2 py-1 bg-gray-900 text-white text-sm rounded-lg shadow-lg`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default IconPopover;