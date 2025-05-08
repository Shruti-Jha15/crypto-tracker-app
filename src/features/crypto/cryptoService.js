import { createSlice } from '@reduxjs/toolkit';
import { updatePrices } from './cryptoSlice';
class CryptoWebSocket {
  constructor(store) {
    this.store = store;
    this.interval = null;
  }

  connect() {
    // Simulate WebSocket connection with setInterval
    this.interval = setInterval(() => {
      this.store.dispatch(updatePrices());
    }, 2000); // Update every 2 seconds
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export default CryptoWebSocket;