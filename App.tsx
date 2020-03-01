import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, Platform, StatusBar, Linking } from 'react-native';

export default function App() {
  const uri = 'https://coronas.info/';
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar translucent />
      <WebView
        ref={ref => {
          this.webview = ref;
        }}
        source={{ uri }}
        scalesPageToFit={false}
        onNavigationStateChange={event => {
          if (!event.url.includes(uri)) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    </SafeAreaView>
  );
}
