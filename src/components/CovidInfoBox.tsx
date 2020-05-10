import * as React from 'react';

import { formatNumber } from '../helpers';

interface Props {
  number: number;
  color: string;
  text: string;
}

export const CovidInfoBox = ({ number, text, color }: Props) => {
  return (
    <div style={boxStyle}>
      <h2 style={{color}}>{formatNumber(number)}</h2>
      <h4>{text}</h4>
    </div>
  );
};

const boxStyle = {
  display: 'inline-block',
  borderRadius: '10px',
  padding: '20px',
  minHeight: '150px',
  minWidth: '250px',
  margin: '10px 0px',
  backgroundColor: '#fff',
};
