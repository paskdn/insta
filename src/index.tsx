import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Root = (): ReactElement => (
  <View style={styles.container}>
    <Text>Hello World!</Text>
  </View>
);

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
