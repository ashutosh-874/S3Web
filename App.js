/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { WebView } from 'react-native-webview';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <WebView 
		style={{ flex: 1}}
		source={{ uri: 'https://mdrxonline.com/dicomviewer/?dcm=https://cloudfront.mdrxonline.com/MdRxProdCopy/8f30121469bb41239a1a/7/dcm/MRBRAIN_2022-01-11-161427.dcm' }}
		javaScriptEnabled={true}
		injectedJavaScript={`
			document.cookie = 'CloudFront-Key-Pair-Id=K1NW43FMEPF75H; SameSite=None; path=/; domain=.mdrxonline.com;';
      document.cookie = 'CloudFront-Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jbG91ZGZyb250Lm1kcnhvbmxpbmUuY29tL01kUnhQcm9kQ29weS84ZjMwMTIxNDY5YmI0MTIzOWExYS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjQzMzY0MTIyfX19XX0_; SameSite=None; path=/; domain=.mdrxonline.com;';
      document.cookie = 'CloudFront-Signature=OUA2k-IMXnqS8rDJyCk69Kuumepwi-QXR6-2KnyQ-HuhRUkwloHWUufW1fPv0lY7H-lwjZo9tua~evLup-JPcHr0CaVQ3eq9KC~vT7hjeZ0-vefTCzVPpfgs94O3qN9iKGC~LYk9H9LSZDFRdb~fntqL~rPtis4OYiprrGZys3gQFWP0XvVfErg~8hSH2jcOlwHEpfaZLs~eI2z7KD1YKmebeJr5D7iC4z-yOtvUoqM6plMHWJAUEDifJnpUm5mbSPnUPLoRSZVB9JquErmk8jGUlX9XWl2MUiQvN~xegVkJU8YsPnNnMpOAE1sNZDyUQDvvkbCOcxdE~CTlTR6ung__; SameSite=None; path=/; domain=.mdrxonline.com;';
		`}
	/>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
