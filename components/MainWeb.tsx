import React, { useState, useEffect } from 'react';
import { SafeAreaView, Platform, StatusBar, Linking, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from '@emotion/native';
import Notification from './Notification';

const LoadingView = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: '#0000003f';
  z-index: 2;
`;
const Loading = styled.ActivityIndicator`
  z-index: 3;
`;
const Home = styled(WebView)`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: '#0000003f';
  z-index: 2;
`;
export default function MainWeb({ uri = 'https://coronas.info' }) {
  const [loading, loadingEnd] = useState(true);
  useEffect(() => {
    if (!loading) {
      Notification.register();
      return () => {
        Notification.unregister();
      };
    }
  }, [loading]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: loading ? 'center' : 'stretch',
      }}
    >
      <StatusBar translucent />
      {loading ? (
        <LoadingView>
          <Loading size='large' />
        </LoadingView>
      ) : null}
      <Home
        onLoad={() => {
          loadingEnd(false);
        }}
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
