import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CryptoChart = ({ data, color = '#8884d8' }) => {
  return (
    <div style={{ width: '100px', height: '30px' }}>
      <Sparklines data={data} width={100} height={30}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
};

export default CryptoChart;