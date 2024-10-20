import React from 'react';

function MenuArrowIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M1.2,6.3h11.2c0.7,0,1.2-0.6,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2H1.2C0.6,3.8,0,4.3,0,5C0,5.7,0.6,6.3,1.2,6.3z" />
        <path d="M19.4,10.7l-4.2-2.9c-0.7-0.5-1.6-0.3-2.1,0.3c-0.5,0.6-0.4,1.5,0.3,2l0.8,0.6h-13c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2h13l-0.8,0.6c-0.7,0.5-0.8,1.4-0.3,2c0.5,0.6,1.5,0.8,2.1,0.3l4.2-2.9c0.4-0.3,0.6-0.7,0.6-1.2C20,11.4,19.8,11,19.4,10.7z" />
      </g>
    </svg>
  );
}

export default MenuArrowIcon;
