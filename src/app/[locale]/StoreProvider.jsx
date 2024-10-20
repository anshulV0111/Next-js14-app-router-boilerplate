'use client';

import makeStore from '@/redux';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    const { store } = makeStore();
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  );
}
