import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://www.bitcoin.com/images/uploads/home/header-coin-1.png',
      price: 93759.48,
      change1h: -0.43,
      change24h: -0.93,
      change7d: -11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      sparkline: [92000, 92500, 93000, 93500, 94000, 93800, 93759],
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://logos-world.net/wp-content/uploads/2020/12/Ethereum-Symbol-700x394.png',
      price: 1802.46,
      change1h: -0.60,
      change24h: -3.21,
      change7d: -13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
      sparkline: [1750, 1780, 1790, 1810, 1820, 1815, 1802],
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png',
      price: 1.00,
      change1h: -0.00,
      change24h: -0.00,
      change7d: -0.04,
      marketCap: 145320022085,
      volume24h: 92268882007,
      circulatingSupply: 145.27,
      maxSupply: null,
      sparkline: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      id: 4,
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://static-00.iconduck.com/assets.00/xrp-cryptocurrency-icon-512x512-lzdikk94.png',
      price: 2.22,
      change1h: -0.46,
      change24h: -0.54,
      change7d: -6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58.39,
      maxSupply: 100,
      sparkline: [2.3, 2.25, 2.2, 2.22, 2.23, 2.21, 2.22],
    },
    {
      id: 5,
      name: 'BNB',
      symbol: 'BNB',
      logo: 'https://assets.crypto.ro/logos/bnb-bnb-logo.png',
      price: 606.65,
      change1h: -0.09,
      change24h: -1.20,
      change7d: -3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140.89,
      maxSupply: null,
      sparkline: [610, 608, 607, 605, 606, 607, 606.65],
    },
    {
      id: 6,
      name: 'Solana',
      symbol: 'SOL',
      logo: 'https://logowik.com/content/uploads/images/solana1243.logowik.com.webp',
      price: 151.51,
      change1h: -0.53,
      change24h: -1.26,
      change7d: -14.74,
      marketCap: 78381958631,
      volume24h: 4881674486,
      circulatingSupply: 517.31,
      maxSupply: null,
      sparkline: [160, 158, 156, 154, 152, 151.5, 151.51],
    },
  ],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        // Generate random price changes
        const priceChange = (Math.random() * 2 - 1) * 0.01;
        const newPrice = asset.price * (1 + priceChange);
        
        // Update all related metrics
        return {
          ...asset,
          price: parseFloat(newPrice.toFixed(2)),
          change1h: parseFloat((asset.change1h + (Math.random() * 0.2 - 0.1)).toFixed(2)),
          change24h: parseFloat((asset.change24h + (Math.random() * 0.2 - 0.1)).toFixed(2)),
          change7d: parseFloat((asset.change7d + (Math.random() * 0.2 - 0.1)).toFixed(2)),
          volume24h: parseFloat((asset.volume24h * (1 + (Math.random() * 0.1 - 0.05))).toFixed(0)),
          marketCap: parseFloat((newPrice * asset.circulatingSupply * 1000000).toFixed(0)),
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;

export const selectAllAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;