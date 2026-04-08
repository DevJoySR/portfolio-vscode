// src/lib/redux/ReduxProvider.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}