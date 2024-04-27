import React from 'react';
import './CircleDot.css';
function CircleDot(props) {
  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
}

export default CircleDot;
