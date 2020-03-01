import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://coronas.info/' }}
      scalesPageToFit={false}
      style={{ marginTop: Platform.OS === 'ios' ? 30 : 0 }}
    />
  );
}
