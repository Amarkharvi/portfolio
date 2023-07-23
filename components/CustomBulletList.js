// components/CustomBulletList.js
import React from 'react';
import HTMLReactParser from 'html-react-parser';

const CustomBulletList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className='py-1 px-1'>
          <span className="custom-bullet"><p className='inline-flex items-center pl-7'>{HTMLReactParser(item.text)}</p></span>
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
        }
        .custom-bullet {
          background-image: url('icons/bullet.svg'); /* Replace with the appropriate SVG file for each bullet */
          background-size: contain;
          background-repeat: no-repeat;
        }
      `}</style>
    </ul>
  );
};

export default CustomBulletList;
