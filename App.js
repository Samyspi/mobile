// App.js
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppNavigator from './navigation/index';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
