import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
// INFO: to use amplify styles = https://ui.docs.amplify.aws/react-native/getting-started/installation
// import {withAuthenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

// export default withAuthenticator(App);
export default App;
