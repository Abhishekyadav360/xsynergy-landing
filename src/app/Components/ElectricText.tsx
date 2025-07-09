import React from 'react';


interface ElectricTextProps {
  text?: string;
}

const ElectricText: React.FC<ElectricTextProps> = ({ text = 'Next' }) => {
  return (
    <div className="text__container">
      <h1 className="text" data-text={text}>
        {text}
      </h1>
      <div className="text__gradient"></div>
      <div className="text__spotlight"></div>
    </div>
  );
};

export default ElectricText;