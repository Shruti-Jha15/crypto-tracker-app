import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import CryptoWebSocket from './features/crypto/cryptoService';
import CryptoTable from './components/CryptoTable';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const ws = new CryptoWebSocket(store);
    ws.connect();
    
    return () => {
      ws.disconnect();
    };
  }, [dispatch]);

  return (
    <Layout>
      <CryptoTable />
    </Layout>
  );
};

export default App;