import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import CryptoChart from './CryptoChart';
import { formatNumber } from '../utils/format';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img 
                    src={asset.logo} 
                    alt={asset.name} 
                    style={{ width: '24px', height: '24px', marginRight: '8px' }} 
                  />
                  <span>{asset.name}</span>
                  <span className="text-muted ms-2">{asset.symbol}</span>
                </div>
              </td>
              <td>${formatNumber(asset.price)}</td>
              <td style={{ color: asset.change1h >= 0 ? 'green' : 'red' }}>
                {asset.change1h >= 0 ? '+' : ''}{asset.change1h}%
              </td>
              <td style={{ color: asset.change24h >= 0 ? 'green' : 'red' }}>
                {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
              </td>
              <td style={{ color: asset.change7d >= 0 ? 'green' : 'red' }}>
                {asset.change7d >= 0 ? '+' : ''}{asset.change7d}%
              </td>
              <td>${formatNumber(asset.marketCap)}</td>
              <td>${formatNumber(asset.volume24h)}</td>
              <td>
                {formatNumber(asset.circulatingSupply)} {asset.symbol}
                {asset.maxSupply && (
                  <div className="text-muted small">
                    Max: {formatNumber(asset.maxSupply)} {asset.symbol}
                  </div>
                )}
              </td>
              <td>
                {asset.maxSupply ? `${formatNumber(asset.maxSupply)} ${asset.symbol}` : '∞'}
              </td>
              <td>
                <CryptoChart 
                  data={asset.sparkline} 
                  color={asset.change7d >= 0 ? 'green' : 'red'} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;